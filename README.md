# Model Api Site/Blog

## Commands

### Folder Permissions

If you have problems with folder permissions run the following command

```
 sudo chown -R your-user:your-user folder-project
```

### Migrations

```
docker container exec -it site-api adonis migration:run
```

Created 'RunDatabaseSeeder.js' file to order executions of seed files.
Note: Add 'static' to seed files for orderly execution.

```
docker container exec -it site-api adonis seed --files='RunDatabaseSeeder.js'
```

### Seeds

```
docker container exec -it site-api adonis make:seed User
```
