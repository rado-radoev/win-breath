# Supabase
## Working with the database
```sh
# connect to supabase
supabase login                               
supabase init --force
supabase link --project-ref CLOUD_DB_ID
# create migration
supabase migration new MIGRATION_FILE_NAME
# deploy migration
# we need linked so we can deploy to the cloud db, otherwise supabase tries to deploy locally
upabase migration up --linked 
```