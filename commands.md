
Initialize a Git repo:

git init
git add .
git commit -m "Initial commit"

Push it to a GitHub repository (or GitLab, etc.)
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin master


laptop

Clone the repo:

git clone https://github.com/yourusername/your-repo.git
Open the folder in VS Code and run:

npm install
Now your project is on both machines, and you can use git push and git pull to keep them in sync.