Step 1: Create sln and Project1 & Project2 via `dotnet new angular` cli command 

Step 2: Add nx workspace using `nx create-nx-workspace cli` command

Step 3: Add new Project1 and Project2 apps to workspace (`nx g @nrwl/angular:app [project name]`) 

Step 4: Amend nrwl Project1 to visually match .net Project1, and then do the same with Project2

Step 5: Configure CORS and other setup (including ports) for both nrwl angular apps to be able to call back into the .net api

Step 6: Create lib in workspace and move the http client calling functionality down to there to be shared by front end apps