# Pushing Commits to GitHub 

It's more common to host a central repo on a code hosting service. GitHub is the most popular Git service. Other alternatives that work similarly include BitBucket and GitLab.

    After setting up a repo and making some commits on your local machine, you create a new, empty repo on the hosting service's server.
    Then you add the new repo as a remote on your local repo, and push your commits there.
    Other developers can clone this central hosted repo to their machines.
    As you make more commits on your local repo, you can push them up to the central repo.
    Other developers can then pull the commits down to their cloned repos so they're up to date.

Creating a GitHub repo

Let's create a repo on GitHub, so we can push our medals repository code to it. To create a repo on GitHub, you'll need to create an account. Just visit https://github.com in your web browser, click the "Sign up" link [click], and follow the directions.

    Once you're signed up, we need to create a new repo. From any page on github.com, there should be a menu with a "New repository" link. Click that.
        We'll be asked to enter a repository name. Ideally repo names are all lower-case, and if there are multiple words they'll be separated with dashes.
        We can use any name we want, but let's just use medals.
        We'll enter a quick description of the repo: "Website for medals store."
        Now you can choose whether to make the repo public or private.
        You may see a check box allowing you to "initialize this repository with a README".
        It says to "Skip this step if you're importing an existing repository", which we are, so leave it unchecked.
        There may also be options to add a .gitignore file or a license file; you'll want to leave those set to "None".
        When you're ready, click the button to create a repository.

Adding the GitHub repo as a remote

    You'll be taken to the web page for your new repository. This is the URL where the public will go to view your project's source code in their web browsers.
    Since no code has been pushed here yet, you'll just see a set of tips on getting started. These include shell commands that have been customized to work for your repo. [Note: If you accidentally chose to create a README or license files when creating the repo, you won't see directions. If this happens, see the Troubleshooting section below.]
        There's a section for use "if you've done this kind of thing before".
        There are two protocol options here, "SSH" and "HTTPS". Notice that the URLs in all the commands change depending on which option you select.
        To get started, we'll want to select "HTTPS", although you might want to switch to "SSH" later. See below if you want more info on SSH.
    Let's go to our terminal, and run the commands they suggest in the section to "push an existing repository from the command line". If you have 2 factor authentication on, you will need to get a personal access token.

git remote add origin [URL]

    As the GitHub instructions suggest, we'll give the remote repo a name of origin. This is the same name that would have been set up by default if we had cloned our local repo from the GitHub repo.
    Now we need the second argument, the URL of the remote repo. We'll just copy the URL from the command shown in our browser. Then we'll paste it into the terminal. [Note for Workspaces users: there is a known bug that may prevent you from pasting into the Console. If this is the case, you may have to type the URL manually.]
    Once all that's typed in, press Enter to run the command and it will add the GitHub repository as a remote repo.

The second command GitHub recommends we run is a new command, git push.

git push -u origin main

UPDATE - Renaming the default branch from master to main

    Whereas the git pull command "pulls" changes from a remote repo into your local repo, the git push command "pushes" changes from your local repo into a remote repo. git pull gets changes made by others, git push shares changes you've made with others.
        GitHub is recommending a few arguments to git push as well.
        First is the -u command line option. The -u, or set-upstream option means that you want Git to remember the repo and branch you are about to specify, and make all future git push commands push to that repo and branch by default. That way, you won't have to specify a repo and branch each time you run git push.
        The next two arguments need to actually specify that default repo and branch.
            We'll use a repo of origin.
            And we'll specify the only branch that exists in the remote repo, the one branch that gets created by default, main.
        When we run the command, because we used an https URL for the remote repo, we'll be prompted for a user name. You should enter the user name you chose when setting up your GitHub account.
        Then we'll be prompted for a password. Again, enter the password you chose when setting up your account.
        If everything works, you'll see several messages as Git uploads our commits to the remote repo.

$ git push -u origin main
Username for 'https://github.com': example
Password for 'https://example@github.com':
Counting objects: 41, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (35/35), done.
Writing objects: 100% (41/41), 4.31 KiB | 0 bytes/s, done.
Total 41 (delta 14), reused 0 (delta 0)
remote: Resolving deltas: 100% (14/14), done.
To https://github.com/example/medals.git
 * [new branch]      main -> main
Branch main set up to track remote branch main from origin.

Using SSH with GitHub

SSH is an alternate, secure way to connect to GitHub. It's convenient because once it's properly set up, you won't have to type your username and password every time you push or pull from a GitHub repo. But setting it up does require some experience with the terminal.

Sorry, but we can't help diagnose any issues you have with SSH; you'll be on your own.

If you want to set it up, GitHub has a tutorial here.
Troubleshooting
If you accidentally created one or more files in the GitHub repo...

You'll need to pull the remote files to your repo and merge them in before you can push. We haven't covered merging in this course, but we'll tell you enough to fix the current problem.

    On GitHub, click the "Clone or download" button and note the HTTPS URL for the repo.
    In your local repo, run git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git to add the GitHub repo as a remote.
    The GitHub repo contains some commits that you don't yet have locally. If you try to run git push -u origin main right now, you'll get this error:

To https://github.com/jaymcgavren/medals.git
! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/USERNAME/REPO_NAME.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first merge the remote changes (e.g.,
hint: 'git pull') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

    As the hint suggests, run git pull origin main. (You need to provide the remote name and branch name because an upstream repo and branch haven't been set yet.)
    Git will pull the commits from GitHub, and merge them with your local commits (meaning it will add the commits to your local history along with all your other commits).
    This triggers a "merge commit", so Git will launch an editor to get a commit message. Just save the default message, and exit the editor to complete the commit.
    Now you should be able to run git push -u origin main, and resume following our tutorial directions normally.

A pre-populated GitHub repo

Practice is important - we encourage you to set up a repo of your own and follow along with the demonstration in the video.

We do realize this may not be practical for everyone, though. If you just want to browse the finished result, here's a GitHub repo we've set up. 

----------------------------------------------------- 
# Exploring the Repo on GitHub



    You can think of the GitHub UI as a Web version of the Git command line interface. There are ways to get all the same information that you would from the git log command, the git diff command, and more.
    We can click on any file name to look at the source code that file contains.
    On each page, the repository name, medals, is a link that will take us back to the main repository page.
    The main repository page has a link to the commit history, which was pushed up from your Git repo.
        All the commits you've made will be shown here, along with their commit messages.
        You can click on the partial SHA checksum shown next to each commit. That will take you to a page showing the changes made in that commit.
    This is a public repository, so anyone who has the link can see this page. When someone clicks that link, they'll be able to visit this page and view everything you see here. The only thing they won't be able to do is make changes via their browser.
    They can, however, use Git to clone their own copy of your code on their computers, which they can then make changes to.
    Because this is set up as a public repository, anyone with the URL can clone it, even if they don't have a GitHub account.
        On your repo's main page, there should be a "Clone or Download" button.
        That will reveal the Git URL for the repo.
    Anyone can copy this URL and use it to clone the repo.
        From a terminal, type git clone, followed by a space, and paste the Git URL that you copied from GitHub.

git clone https://github.com/example/medals.git

Other people won't be able to push commits directly to your GitHub repo. But they can make a "fork" of the repo and push to that. For more info, see: Fork A Repo - User Documentation

https://docs.github.com/en/get-started/quickstart/fork-a-repo


--------------------------------------------------------------------- 
# Summary 


Common Git Commands

    Starting a repo
        git init
    Committing files
        git add and git commit
        git status
        git log
    Managing committed files
        git rm and git mv
        git revert
    Working with remotes
        git clone
        git pull
        git remote
        git push

But there are other important features we haven't covered, such as branches and merging file changes. You can learn more about those in our Git Branches and Merging course.
Practice and Further Reading

    Try using Git for all your Treehouse projects. If you have any saved project folders already, use git init to convert them to Git repos, then commit all your files. And for any new projects you create, use Git from the very start. Not only will this let you practice using Git, it will give you more protection against losing your work.
    We've set up a copy of the practice repo from Stage 2 on GitHub. Try forking it, cloning it to a local repo, making changes, and then pushing them back up to your forked repo.

Atlassian, creators of BitBucket, have an excellent set of Git tutorials as well.


https://www.atlassian.com/git/tutorials 

1. What is a Git repository? 
    The collection of all the versions of your projects files 
2. What are the 40-character letters and numbers that appear in 'git log' called? 
    Commit SHAs  
3. What command retrieves commits from a remote repo? 
    git pull 
4. What are Git commits? 
    They represent a version, or snapshot, of your files as they appeared at one point in time 
5. Which command will show you lines that have changed since the last commit in staged files? 
      git diff -- staged

6. What command will give you a list of available remote repositories? 
    git remote 

7. Why is Git referred to as a "distributed" version control system?
 There is no 'central' repository, at least not at an architectual level 

8. Which of these Git subcommands can set up a new repo? 
  git init 

9. what command sends commits to a remote repository? 
  git piush   

10. When you want to discard changes to a modified file, but don't remember the command to do so, what command can you run to get a hint for what to type? 
  git status 
11. which subcommand stages files that already being tracked by git? 
  git add 
12. Which command will show you the lines of an unstaged file that have been changed since the previous commit?
    git diff

