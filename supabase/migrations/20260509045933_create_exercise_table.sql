create table if not exists exercises (
  id bigint primary key generated always as identity,
  type text not null
);