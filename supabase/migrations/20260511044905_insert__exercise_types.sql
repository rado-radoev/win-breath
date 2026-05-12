insert into exercises (type) 
values 
    ('breating'),
    ('cold_plunge'),
    ('cold_shower'),
    ('push_up'),
    ('plank');

-- Grant the privileges the role needs, which is read access
grant select on public.exercises to anon;

-- Enable row level security for the table
alter table exercises enable row level security;