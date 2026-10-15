CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS profiles (
  id SERIAL PRIMARY KEY,
  user_id INTEGER UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  phone VARCHAR(40) DEFAULT '',
  location VARCHAR(150) DEFAULT '',
  education VARCHAR(150) DEFAULT '',
  degree VARCHAR(150) DEFAULT '',
  university VARCHAR(200) DEFAULT '',
  experience VARCHAR(100) DEFAULT '',
  bio TEXT DEFAULT '',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS settings (
  id SERIAL PRIMARY KEY,
  user_id INTEGER UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  notifications BOOLEAN NOT NULL DEFAULT TRUE,
  dark_mode BOOLEAN NOT NULL DEFAULT FALSE,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS assessment_questions (
  id SERIAL PRIMARY KEY,
  skill VARCHAR(100) NOT NULL,
  question TEXT NOT NULL,
  options JSONB NOT NULL,
  correct_answer INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS assessment_results (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  score INTEGER NOT NULL CHECK (score BETWEEN 0 AND 100),
  answers JSONB NOT NULL,
  skill_stats JSONB NOT NULL,
  completed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS roadmap_modules (
  id SERIAL PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  skill VARCHAR(100) NOT NULL,
  description TEXT DEFAULT ''
);

CREATE TABLE IF NOT EXISTS roadmap_progress (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  module_id INTEGER NOT NULL REFERENCES roadmap_modules(id) ON DELETE CASCADE,
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, module_id)
);

CREATE TABLE IF NOT EXISTS jobs (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  company VARCHAR(150) NOT NULL,
  location VARCHAR(150) NOT NULL,
  match_percent INTEGER NOT NULL,
  description TEXT DEFAULT ''
);

INSERT INTO roadmap_modules (title, skill, description)
SELECT * FROM (VALUES
  ('Python Advanced', 'Python', 'Advanced Python concepts and practical development'),
  ('Machine Learning Basics', 'Machine Learning', 'Core ML concepts and model building'),
  ('SQL for Data Science', 'SQL', 'SQL queries, joins and analytical workflows'),
  ('Data Visualization', 'Data Analysis', 'Build effective analytical visualizations')
) AS v(title, skill, description)
WHERE NOT EXISTS (SELECT 1 FROM roadmap_modules);

INSERT INTO jobs (name, company, location, match_percent, description)
SELECT * FROM (VALUES
  ('Data Analyst', 'SkillFlow Jobs', 'Hyderabad', 95, 'Analyze business data and create insights'),
  ('ML Engineer', 'SkillFlow Labs', 'Bengaluru', 90, 'Build and deploy machine learning solutions'),
  ('Python Developer', 'TechFlow', 'Hyderabad', 85, 'Develop Python applications and APIs')
) AS v(name, company, location, match_percent, description)
WHERE NOT EXISTS (SELECT 1 FROM jobs);

INSERT INTO assessment_questions (skill, question, options, correct_answer)
SELECT * FROM (VALUES
  ('Python', 'Which keyword defines a function in Python?', '["func","def","function","define"]'::jsonb, 1),
  ('Python', 'Which data type is immutable?', '["list","dictionary","tuple","set"]'::jsonb, 2),
  ('Machine Learning', 'Which is a supervised learning algorithm?', '["Linear Regression","K-Means","PCA","Apriori"]'::jsonb, 0),
  ('Machine Learning', 'What does overfitting mean?', '["Model learns noise too closely","Model has no parameters","Data is always clean","Training is skipped"]'::jsonb, 0),
  ('SQL', 'Which command retrieves data?', '["SELECT","INSERT","UPDATE","DELETE"]'::jsonb, 0),
  ('SQL', 'Which clause filters rows?', '["ORDER BY","WHERE","GROUP BY","JOIN"]'::jsonb, 1),
  ('Data Analysis', 'Which Python library is commonly used for tabular data?', '["Pandas","Flask","Django","Requests"]'::jsonb, 0),
  ('Communication', 'Which is most useful in professional communication?', '["Clear and concise information","Avoiding all questions","Using only technical terms","Ignoring feedback"]'::jsonb, 0)
) AS v(skill, question, options, correct_answer)
WHERE NOT EXISTS (SELECT 1 FROM assessment_questions);