-- Create a table for community wall feedbacks
create table community_wall (
  id uuid references auth.users not null,
  updated_at timestamp with time zone,
  created_at timestamp with time zone,
  text text ,
  user_id text ,
  avatar_url text ,
  name text ,
  email text ,

  primary key (id),
  constraint username_length check (char_length(text) >= 3)
);

