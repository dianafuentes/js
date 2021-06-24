# WHAT IS GIT? 
  - A version control system 
    Helps control the different versions of the files in your project 
    Tracks all changes to your files 
    reset any files contents to match previous version 
  - Git repository 
    The collection of all old versions of your projects files 
    Basically a folder in which you can edit your files then run Git commands to store your changes 
    Have multiple repositories 
  - Commits 
    They are snapshots 
      represents a point in your projects history that you might want to travel back to some time in the future
    Each time you complete a change to some or all of your prajects files  
WHY GIT? 
  Git is a distributed version control system as opposed to a centralized system.  

------------------------------------------------------------------------
git --help 

# Important Commands 

- git clone and git init : set up new repositories 
- git add, git status, and git commit : used when committing new versions of files 
- git log : view a list of old commits 
- git mv and git rm : move and remove files tracked by Git  
- git psuh and git pull : synchronize commits with remote repositories 

----------------------------------------------------------------------------------------- 
QUIZ 

1. What does it mean when we say a version control system is "distribuated"? 
  Every copy of the repository stores all the old versions of the files; they're not just stored on one central server 
2. What is the value of distribuated version control system, as oppesed to a centralized system? 
  if something happends to the version history on one repository, the history on any other copy of the repository cab be used to restore it. 
3. What is a "commit" in Git? 
  A version of your projects files that you've stored in the repository 
4. What does a version control system do? 
  it keeps old versions of your files  

------------------------------------------------------------------------------------ 
SEE WORKSPACE* 


Our project for this course will be a simplified version of a web site for a company that makes gold, silver, and bronze medals to award at sporting events. If you launch a Treehouse Workspace using the button on this video's page, you'll see a medals directory (directory is a fancy word for folder) with two files in it:

medals/medals.html

<!DOCTYPE html>
<html>
  <body>
    <p>We have a fine selection of medals.</p>
  </body>
</html>

medals/bronze.html

<h1>Check out our bronze medals!</h1>

<p>Medallion: $20</p>
<p>Ribbon: $10</p>

You don't need to worry too much about the particular content of these files; if you really want to know more about HTML, visit our Introduction to HTML and CSS course.

You can create a repository within a project directory on your computer. That's what we'll do here.

We need to change into our project directory so we can turn it into a Git repo. If we type ls and press Enter, it will run the ls command. This lists files and directories within the current directory. By the way, the ls command isn't part of Git, but it's a standard command on all Unix-like systems. It's worth your time to learn how to use it. We have more coverage of the ls command in this video from our Introduction to the Terminal course.

    We can see our project directory, medals, in the output of ls.
    To get into the medals directory:

cd medals

    The cd command is another important command that works on Linux, Mac and Windows systems. cd is also covered in our Introduction to the Terminal course; you can learn more about it in this video.
    Now that we're in the project directory, we need to initialize the new repository. We'll do this with the git init command.

git init

    Like all the Git commands we'll be using in this course, it starts with the name of the git executable, followed by a space. Then, we type the name of the subcommand we want to run, like add or commit or, in this case, init.
    Press Enter to run it. Git will initialize a repository in the current directory, by creating a new directory named .git within it.
    You won't see the .git directory at first. But ls has a special command line option that will cause it to show all files, even hidden ones.

ls -a

    If we hit Enter to run it, we can see the .git directory in the output of ls.

---------------------------------------------------------------------

git commands won't work outside a Git repo.
    Whenever you exit a repo directory, be sure to change back into the directory with cd before issuing any Git commands.

We've initialized a Git repository in our project's directory. But our project files haven't been added to the repository yet. In fact, Git has no idea they exist! In this video, we're going to fix that, by staging and then committing these files.

Our project directory is known in Git terminology as the working directory, because it's the directory where we actually edit and do other work on our files. Right now our working directory contains two files, medals.html and bronze.html, that haven't been added to Git.
File statuses

There are three states every file goes through in a Git repository.

    When you make changes to a file in the working directory, it's "modified".
    You don't necessarily want to include all of these modified files in your next commit, so you need to specify which ones you will include. You do this by adding files to the index, more commonly known as the "staging area" or "cache". The staging area is where you place the files you're going to commit. Files you've added to the index are referred to as "staged" files.
    When you've staged all the files you want, you make a commit, and that's when the files are actually added to your Git repository.
    Then, when you next make a change to any of those files, they're treated as "modified" again. You can stage and commit the files again to save a new version of them. And the cycle repeats.

About git status

    We can find out what state our project files are in, using the git status command.
    Its output includes a list of "untracked files". These are files that Git isn't "tracking" yet - it's not keeping track of changes to them so we're not saving new versions of them.
    Its output also includes helpful messages suggesting commands to run next.

# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
#       medals.html
#       bronze.html
nothing added to commit but untracked files present (use "git add" to track)

Staging files

    Let's try the suggested command:

git add medals.html

    There's no output from the command, which is actually a good thing. Many Git commands produce output only when there's an error. Empty output means "everything went fine".
    The git add command adds a file to the staging area, the place we compose our commit.
    Now, let's try running git status again, to see if that's changed.
    The output is now in two sections.
        There's a new "Changes to be committed" section, which lists files in the staging area. That list consists of one file right now, medals.html.
        The "Untracked files" section looks much the same as before, except that now it only includes bronze.html.

Committing files

    We use the git commit command to commit our staged changes.
    You need to provide a message to go with every commit, a brief note explaining what the commit does.
    We do this with the -m option. -m should be followed by a string in quotation marks. Since this commit adds medals.html, we'll use a message of "Add main site page".

git commit -m "Add main site page"

    As a rule of thumb, a commit message should complete the phrase "This commit will:"
        "This commit will: Add main site page"
        "This commit will: Remove sale description"
        "This commit will: Add new products", etc.

Git configuration

    Run the git commit ... command, and we'll see an error.
        In addition to a commit message, Git needs to know your name and e-mail address so it can attach them to the commit.
        This is another of Git's collaboration features. It allows other people working on the project to contact you if they need to ask about the commit.
        The name and e-mail address are permanently stored as part of Git's configuration. The git config command allows you to add and edit values in that configuration.
        Let's run the commands it suggests:

git config --global user.email "jay.mcgavren@teamtreehouse.com"
git config --global user.name "Jay McGavren"

Completing the commit

    Now, with a user name and email stored, I should be able to make a commit successfully.
    Most shells keep a history of commands you've entered. You can hit the up arrow key to bring up previous commands, so you don't have to type them again.
    This isn't a feature of Git, it's a feature of the shell itself.
    Hit the up arrow until the git commit command is active, and then hit Enter to re-run it.
    This time, we'll see a message confirming the commit.

Using an editor for commit messages

    If you leave off the -m command line option when running git commit, Git will launch a text editor so you can enter a commit message.
    Git launches the text editor with a pre-formatted file, with an empty line at the top for you to type your commit message, and some comments below that explaining what to do.
    We've set up Workspaces to use a text editor called nano for editing Git messages.
    With nano, you just type your message normally: "Add main site page"
    Next, we need to save the file and exit the editor.
    nano displays commands you can run across the bottom of the screen.
    The carat (^) character stands for the Ctrl key. So Ctrl-G will "Get Help", Ctrl-O will write out the file, etc.
    We want to press Ctrl-o to write out the file.
    The file name has already been set up for us, so we should just press Enter to accept the existing file name.
    Then we can press Ctrl-x to exit the editor.
    When the editor exits, Git will read your commit message from the saved file, and use that to complete the commit.
    This gives us the same result as if we had used the -m option to git commit.

On other systems, Git uses an editor named vi by default.

    How to change your default editor
    An Extremely Quick and Simple Introduction to the Vi Text Editor

Viewing Git logs

    Once a commit is complete, it's a permanent part of the repository's history.
    You can review that history with the git log subcommand.
        For each commit, git log shows the:
        Author name and e-mail
        Date and time of the commit
        The commit message
        If you want, you can add the -p option to git log: git log -p. Then git log will show the lines that were added in each file.
        Anytime a git command shows output that's too long for the screen, it will show that output using a pager program. You can use the up and down arrow keys to scroll through the output, and press the q key when you're ready to quit back to the shell prompt.

More options

Those are the basics of the git add and git commit commands. You can do almost anything with what we've already shown you, but there are additional options with git add and git commit that can make it easier to work with large numbers of files. See the teacher's notes if you'd like to learn more.

    If you pass a directory name to git add, it will stage all the files that directory contains: git add mydir
    You can specify the current directory with .. So git add . will stage all files in the current directory, and all its subdirectories.
    You can stage changes to all tracked files (files you've added in a previous commit) with the -a option to git commit. So if you've changed two files that are already tracked, you can stage and commit the changes in a single command with git commit -a -m "My message". (This can also be shortened to git commit -am "My message".)
        To prevent accidentally committing the wrong files, the -a option does not add "untracked" files; files that have never been committed before. You'll need to stage those with git add first.
        Note: The code challenges for this course want you to stage and commit files using separate commands, so you won't be able to use -a in code challenges. 

---------------------------------------------------------------------------
git config = allows you to add and edit values in that configuration 

---------------------------------------------------------------------------
1. initialize a new Git repo here in the current directory 
    git init  
2. Add the file chapter1.txt to the staging area for committing. 
    git add chapter1.txt 

--------------------------------------------------------------------------
# STAGING CHANGED FILES 

We've committed our first version of medals.html to our repository. But medals.html doesn't include a link to bronze.html right now, so users of the site will have no way to find that page. We'll need to edit medals.html to add that link, and commit those changes as well.

Add the following code to medals.html:

  <div>
    <a href="bronze.html">Bronze medals</a>
  </div>

  Be sure to save your changes after editing the file.
  Don't worry if you don't understand all that. If you want, you can learn more about HTML in this course.

Now, we need to commit our changes to the file.

We've modified the medals.html file. Let's see what its status is, with the git status command: git status
There's a new section, "Changes not staged for commit". This is where changes to tracked files will appear.
Our medals.html file is in that section, listed as "modified".

      $ git status
      # On branch master
      # Changes not staged for commit:
      #   (use "git add <file>..." to update what will be committed)
      #   (use "git checkout -- <file>..." to discard changes in working directory)
      #
      #       modified:   medals.html
      #
      no changes added to commit (use "git add" and/or "git commit -a")

We can see a helpful message in the output telling us what to do next: 'use "git add ..." to update what will be committed'.
So, let's run the command git add medals.html.
git add doesn't just add untracked files to the staging area. It also stages the changes within tracked files.
If we run git status again, we'll see the modified medals.html is now listed under the "Changes to be committed" section. We've staged the changes to be committed.

          $ git status
          # On branch master
          # Changes to be committed:
          #   (use "git reset HEAD <file>..." to unstage)
          #
          #       modified:   medals.html
          #
          Untracked files:
            (use "git add <file>..." to include in what will be committed)

                  bronze.html

But we can also see that bronze.html, the file our change refers to, is down in the "Untracked files" section.
So, as the helpful message in the "Untracked files" section says, we'll run git add to add bronze.html to the staging area: git add bronze.html
Let's run git status again:

        # On branch master
        # Changes to be committed:
        #   (use "git reset HEAD <file>..." to unstage)
        #
        #       modified:   medals.html
        #       new file:   bronze.html

Now both files are in the "Changes to be committed" section, medals.html as "modified" and bronze.html as a "new file".
Now we can commit them both at once: git commit -m "Add bronze medals"
Now that the commit is complete, we can run git status...
And it will show us that we have no modified files, and no untracked files.
It says the working directory is "clean", meaning it doesn't have any changes that aren't also in the Git repository. Everything is committed!

          $ git status
          # On branch master
          nothing to commit, working directory clean

Only Staged Files Are Committed

Sometimes you'll have multiple modified files, but you won't want to commit all of them.

Suppose I had added copyright info to the medals.html file, and marketing text to the bronze.html file:

          $ git status
          On branch master
          Your branch is up to date with 'origin/master'.

          Changes not staged for commit:
          (use "git add <file>..." to update what will be committed)
          (use "git checkout -- <file>..." to discard changes in working directory)

          modified:   bronze.html
          modified:   medals.html

          no changes added to commit (use "git add" and/or "git commit -a")

The two changes are totally unrelated. It would probably be best to handle them as two separate commits. But if all modified files were always committed, that wouldn't be possible. I'd have to undo changes to one file before I could make a commit.

But that's why Git has a staging area. It allows you to select individual modified files to be part of a commit, while leaving other modified files to be part of a separate commit.

That means that if I want, I can stage and commit only the bronze.html file:

            $ git add bronze.html
            $ git status
            On branch master
            Your branch is up to date with 'origin/master'.

            Changes to be committed:
            (use "git reset HEAD <file>..." to unstage)

            modified:   bronze.html

            Changes not staged for commit:
            (use "git add <file>..." to update what will be committed)
            (use "git checkout -- <file>..." to discard changes in working directory)

            modified:   medals.html

            $ git commit -m "Add marketing text"
            [master 6e93661] Add marketing text
            1 file changed, 2 insertions(+)

Because the medals.html file isn't staged, it will be left out of the commit and left in a "modified" state:

            $ git status
            On branch master
            Your branch is ahead of 'origin/master' by 1 commit.
            (use "git push" to publish your local commits)

            Changes not staged for commit:
            (use "git add <file>..." to update what will be committed)
            (use "git checkout -- <file>..." to discard changes in working directory)

            modified:   medals.html

            no changes added to commit (use "git add" and/or "git commit -a")

Then I can stage medals.html and make it part of a separate commit:

          $ git add medals.html
          $ git status
          On branch master
          Your branch is ahead of 'origin/master' by 1 commit.
          (use "git push" to publish your local commits)

          Changes to be committed:
          (use "git reset HEAD <file>..." to unstage)

          modified:   medals.html

          $ git commit -m "Add copyright info"
          [master c9ac1a0] Add copyright info
          1 file changed, 1 insertion(+)
          $ git status
          On branch master
          Your branch is ahead of 'origin/master' by 2 commits.
          (use "git push" to publish your local commits)

          nothing to commit, working tree clean

1. In the command line below, we're still inside the "novel" repo. We've added a dramatic plot twist to chapter1.txt. Add the modified file to the staging area for committing. 
    git add chapter1.txt 

--------------------------------------------------------------------------

# VIEWING CHANGES TO A FILE 

Git can show you exactly how your files have changed over time.
We've shown you the git log -p option, which shows the changes made within each commit.
But we can also use Git to see changes in our files before we commit them.
Suppose we added a heading to our site's main page. Open up medals.html, and at the top add a level 1 heading: <h1>Welcome to our store!</h1>.
Also add a descriptive paragraph: <p>Please choose a section below.</p>
Once the file is saved, we can use the git diff command to view those changes.

          treehouse:~/workspace/medals$ git diff
          diff --git a/medals.html b/medals.html
          index 5f5fbe7..08982c3 100644
          --- a/medals.html
          +++ b/medals.html
          @@ -1,3 +1,6 @@
          +<h1>Welcome to our store!</h1>
          +<p>Please choose a section below.</p>

Git will compare the current contents of your files to what's in the staging area, and show you what's changed. If nothing is staged, then it will compare your files with the contents of your previous commit.
New lines will show with a + sign in front of them.
Removed lines will show with a - sign in front of them.
And changed lines will show with a - sign in front of the old version, and a + sign in front of the new version.

The --staged option

    Now let's stage the file: git add medals.html.
    Let's try running git diff again. This time it exits without showing any output.
    That's because git diff compares the contents of your files against the contents of the staging area. If your changes are already staged, then there's no difference to show.
    But there's a command line option that will show you staged changes if you specify it: git diff --staged. With the --staged option, git diff will compare your staged changes against the previous commit.

Practice

Find a Workspace on Treehouse that you've been working in for a while, and turn it into a Git repo. (Or install Git to your computer and convert your favorite project directory to a repo.) You can store HTML files for a website, code files for a program, or even plain text files. If you need a project idea, try filling a directory with text files, where each file is a recipe for a cookbook.

    In the main project directory, initialize a new Git repo.
    Stage some (or all) of the project files, whatever will make a sensible first commit.
    Make your commit. Be sure to use a commit message that completes the sentence "This commit will..."
    Keep staging and committing until all your project files are committed.
    As you keep working on your project files, commit all your changes to the repo.


1. Run the git command that will show you the changes made within the files. (Changes to the tracked file will be shown, but not the untracked file)
    git diff 
2. Stage chapter1.txt 
  git add chapter1.txt 
3. Run the "git diff" command again, but this time add the option that will show you the staged changes. (When you have the command right, changes to both the file that was previously tracked and the file that was previously untracked will be shown.)

------------------------------------------------------------------ 
# Removing Files 


Removing a file from the working directory

      tin.html:

      <h1>Check out our tin medals!</h1>

      <p>Medallion: $10</p>
      <p>Ribbon: $50</p>

We've added a tin.html file showcasing the store's new tin medals.
If we run git status, we'll see the file is untracked.
So let's add it: git add tin.html
And then we'll commit it: git commit -m "Add tin medals"
But suppose we later learned that customers weren't too pleased with the new tin medals, and we've decided to drop the product.
We can delete the file from our terminal using the rm command, which stands for "remove": rm tin.html
How to use the rm command, by The Linux Information Project

Removing a file from Git

If we run git status, it still shows the deleted file:

        $ git status
        # On branch master
        # Changes not staged for commit:
        #   (use "git add/rm <file>..." to update what will be committed)
        #   (use "git checkout -- <file>..." to discard changes in working directory)
        #
        #       deleted:    tin.html
        #
        no changes added to commit (use "git add" and/or "git commit -a")

It shows that the tin.html file has been deleted, but it shows that in the "Changes not staged for commit" section.
We can make the deletion of tin.html part of a commit by using the git rm subcommand.
git rm is set up to work much like the plain rm command, so it's much like taking our previous command and sticking git in front of it: git rm tin.html
Let's run git status again...
...and we'll see the deletion of tin.html is listed in the "Changes to be committed" section now.

        $ git status
        # On branch master
        # Changes to be committed:
        #   (use "git reset HEAD <file>..." to unstage)
        #
        #       deleted:    tin.html
        #

Next, we can commit as usual: git commit -m "Remove tin medals"
Now we can run git status again...
...and this time it will show the working directory is clean.

          $ git status
          # On branch master
          nothing to commit, working directory clean

And if we run ls, we'll see that the tin.html file is still gone.
By the way, we didn't need to run rm tin.html as a separate step. git rm will remove the file from the working directory for you, if it exists.

-------------------------------------------------------
# Moving Files 

We just created an HTML file for our silver medals page, here in silver.txt.
Let's stage the file for committing: git add silver.txt
And then we'll commit it: git commit -m "Add silver medals"
Unfortunately, only now do we realize that we needed that file name to be saved with a .html extension, not a .txt extension.
But we've already committed the file under the wrong name! How can we fix this?

          The git mv command

Git offers the git mv command to let you move files around.
After you type git mv, you need to provide the name of the file you want to move, silver.txt, and the file name you want to move it to, silver.html.

          git mv silver.txt silver.html

If we run ls now, we'll see that the silver.txt file has been moved to silver.html in our working directory.
Now let's try running git status...
 We'll see "renamed: silver.txt -> silver.html" in the "Changes to be committed" section.
That means the file renaming has been staged.
Now we just need to commit the change: git commit -m "Rename silver.txt to silver.html"

          $ git mv silver.txt silver.html
          $ git status
          # On branch master
          # Changes to be committed:
          #   (use "git reset HEAD <file>..." to unstage)
          #
          #       renamed:    silver.txt -> silver.html
          #
          $ git commit -m "Rename silver.txt to silver.html"
          [master 9505066] Rename silver.txt to silver.html
          1 file changed, 0 insertions(+), 0 deletions(-)
          rename silver.txt => silver.html (100%)

------------------------------------------------------------
# Unstaging Changes 

Let's suppose we've added a <h1>Sale: 100% off!</h1> element in medals.html.
We can stage our changes: git add medals.html
 Now suppose we get word that the store manager doesn't want to do the 100% off sale any more. But what can we do? We've already staged the code to announce the sale!
If we run git status, we'll see a help message in the output: "use git reset HEAD <file>... to unstage"
So, let's try that: git reset HEAD medals.html
If we run git status again, the medals.html file will be back in the "Changes not staged for commit" section.

Now, here's the important thing. You don't have to remember this git reset HEAD command if you don't want to. If you ever have staged changes that you want to unstage, just remember to run git status, and it will show you the command you need to run.

If you'd like to know more about the git reset command, check out this link: Git Reset: Atlassian Git Tutorial

https://www.atlassian.com/git/tutorials/undoing-changes/git-reset 

-------------------------------------------------------------------------- 
# Discarding File Modifications 

In the previous video, we staged a change to medals.html that added a heading announcing a "100% off sale". We decided that was a bad idea, so we unstaged the change.
But the medals.html file saved in our working directory still has that "100% off" heading.

Warning: We're about to show you something Git can't undo. The changes in the medals.html file have never been committed, so Git doesn't have them stored anywhere. And we're about to erase those changes. When you're discarding changes to a modified file, make absolutely sure you're not discarding changes that you actually wanted to keep!

  If we run the git status command, we'll see another helpful hint: use "git checkout -- <file>..." to discard changes in working directory

                $ git status
                On branch master
                Changes not staged for commit:
                  (use "git add <file>..." to update what will be committed)
                  (use "git checkout -- <file>..." to discard changes in working directory)

                        modified:   medals.html

Let's try this command out on the medals.html file.

                git checkout -- medals.html

This uses some special syntax that is mainly used together with git checkout - a space, a pair of dashes, and another space: --. This is not a command line option. An option would be followed by an option name rather than a space. Instead, it's a separator that makes it clear to Git that any arguments that follow will be file names.

Now, we can run git diff again. Since the changes have been discarded, it no longer shows any output.
We can also run git status again, and we'll see the working directory is clean. There are no files that have been modified since the last commit, or rather, our medals.html file has been changed back to its state as of the last commit.

------------------------------------------------------------------- 
# Undoing File Deletions 

Suppose we accidentally deleted a file from our working directory that we actually wanted to keep, like our main site page:

        rm medals.html

Git makes it pretty easy to recover the file.
As before, let's run git status, and it will show the deleted file:

        $ git status
        # On branch master
        # Changes not staged for commit:
        #   (use "git add/rm <file>..." to update what will be committed)
        #   (use "git checkout -- <file>..." to discard changes in working directory)
        #
        #       deleted:    medals.html
        #
        no changes added to commit (use "git add" and/or "git commit -a")

Also as before, there's a message saying use "git checkout -- <file>..." to discard changes in working directory.
his is similar to using git checkout to discard modifications to a file's contents. But in this case, the change we want to discard is the deletion of the file - we want to bring the file back.
If we run that command: git checkout -- medals.html, the file and all its contents will be restored.


------------------------------------------------------------------- 
# Commit SHAs and Undoing Commits 

You've probably noticed the random-looking strings of letters and numbers shown with each commit in git log. For example:

        1d8e15a834a2157fe7af04421c42a893e8a1f23a

Those strings are actually not random; the string is the SHA-1 checksum of all the changes in that commit.
"SHA" stands for Simple Hashing Algorithm.
The checksum is the result of combining all the changes in the commit and feeding them to an algorithm that generates these 40-character strings.
A checksum uniquely identifies a commit.
When you need to select a commit from your history, you can use these SHA-1 checksums, or "SHAs" for short, to identify which commit you want.

The git revert command
  git revert is just one of many commands that lets you specify a particular commit using a SHA.
  With git revert, the SHA is used to specify which commit contains the set of changes you want to undo.
  You can find a commit you want to undo using git log.
  Git lets us abbreviate commit SHAs, so while you could copy and paste the whole thing, you can also just remember the first 5 characters or so.
  When running the git revert command, to specify which commit to revert, just type in the partial SHA from the log as an argument:

            git revert 1d8e1

The revert command works by making a new commit, so it will open an editor so we can edit the commit message.
Save the file and exit to complete the revert commit.

HEAD

  HEAD, in all capital letters, is a shorthand meaning "the most recent commit". We could use the full SHA for the most recent commit, or an abbreviated SHA, but if we type HEAD, Git will operate on whichever commit is the most recent one at that time.
  You can use the HEAD shorthand in place of a commit SHA in any Git command that accepts SHAs.

Practice

We've created an alphabet Git repo that's a little messed up, so you can practice fixing it. Fork this snapshot to get a Workspace containing the repo. Or, if you have Git installed on your computer, you can download this file and unzip it to get a copy of the repo.

Here's what needs fixing:

    We want to keep the f.txt file, but we accidentally ran git rm f.txt. Unstage the file deletion, then restore the copy in the working directory.
    The 1.txt file has been committed to the repo. Make a commit that deletes 1.txt from the repo.
    The c.txt file has accidentally been deleted. Restore the copy in the working directory.
    The z.txt file should actually be named e.txt. Make a commit that moves it to the correct name.
    In the Git log, find the commit with the message "Remove g.txt and h.txt", and revert it.

You'll know you're done when running ls produces this output:

      a.txt  b.txt  c.txt  d.txt  e.txt  f.txt  g.txt  h.txt

And when running git status produces this output:

        On branch master
        nothing to commit, working tree clean

Remember, you can get helpful hints on what command to run next by running the git status command!


-------------------------------------------------------- 
# Cloning a repository  
The "git clone" command can copy a repository, along with its full commit history, to another computer.

Using clones as peers

    With Git, every developer has their own repository on their machine, called their local repo.
    Repos belonging to other developers on the project are referred to as remote repos.
    Each repo is a full copy of the original repo, including all the version history.
    Developers can make commits to their own repo, independently of the others.
    Before beginning work on a new feature, you should use the network to pull commits other developers have made from a remote repo into your local repo, so that you have the latest version of the code.
    Then you can make your changes, and commit them to your local repo.
    Other developers will be able to pull the commits you've made over the network to their clones, so they can access them.

Pushing to a central repo

    Any Git repository is capable of pulling from any other repo. Sometimes collaborators pull from each other's repos directly.
    But it's more common to declare one repo the "central" repo.
    Developers clone this central repo to their local machines over the network.
    Then, each developer begins working on their own separate set of changes.
    A developer adds their changes to this central repo by pushing commits to it over the network. *Other developers receive these commits by pulling them down from the central repo, and they can push up their own changes in return.
    This is the system that GitHub, Bitbucket and other Git hosting services support.

Cloning repos

The easiest way to get a new repo based off another is to clone it, to make a copy of it. This copy will have all the same files in the working directory, plus a full copy of the project's history.

Normally you clone from one computer to another over the Internet or some other network. But we can also clone from one directory to another on the same computer, and everything will work the same. We're going to do that while we get used to the commands.

To clone the medals repo to a repo in another directory named myclone, change to its parent directory and run:

git clone medals myclone

    The first argument to git clone should be the location of the repository you want to clone. Normally, this would be the URL of a repo out on the network somewhere. But for this demonstration, we just clone from the medals repo in our local directory.
    The second argument is the name of the directory you want to clone into. We used the name myclone.
    If we run ls, we'll see a new myclone directory.
        We can change into that with cd myclone.
        If we run ls here in the working directory, we'll see copies of all our files.
        Remember ls -a shows all files, even ones that are hidden by placing a dot at the start of their names... If we run it here, we'll see another .git directory that holds a copy of our repo history.


- cd .. = two periods mean parent directory 

--------------------------------------------------------------- 
# Pulling Changes 



When commits get added to a Git repository, they aren't automatically copied to clones of that repository. One way to distribute the new commits is to pull them in from other repos.

    In the original medals repo, save a gold.html file that advertises gold medals.

medals/gold.html:

<h1>Check out our gold medals!</h1>

<p>Medallion: $60</p>
<p>Ribbon: $30</p>

    Stage the file with git add gold.html, and commit it: git commit -m "Add gold medals"
    git log in the medals repo will show the new commit, but git log in the myclone repo will not.
    We need to get the commit that adds gold.html from the medals repo to the myclone repo.
        To do that, we need a link from the myclone repo back to the medals repo.
        Within a Git repository, you can add links to other repos. These linked repos are referred to as remote repos.
        We can get a list of remote repos with the git remote command.
        We see one remote repo listed here, named origin.

$ git remote
origin

When you clone a Git repo, the original repo is automatically added as a remote on the clone. You can name remote repos whatever you want, but the default used when cloning is origin, because it represents the repo this clone originated from. Because of this default, you'll see a remote repo named origin on most Git repos you work with. In fact, in many cases, the origin repo will be the only remote repo, because everyone on the project just pulls changes from that single repo.

    Since a remote repo is already set up, we're ready to pull changes from it.
        We do this with the git pull command.
        git pull takes an argument, with the name of the remote repo you want to pull changes from. So this command will pull from origin:

git pull origin

    But just as the repo we cloned from was set up as a remote repo automatically, it was also set up as the default repo to pull from.
        So we can actually omit the remote repo name, and just run git pull:

git pull

    Now, we can run git log within the myclone repo. In the output we'll see the "Add gold medals" commit, just like we did in the medals repo.

cd ../medals = means parent directory, medals sub drectory 

------------------------------------------------------------- 
# Adding Remotes 

Add to myclone/medals.html:

    <div>
        <a href="gold.html">Gold medals</a>
    </div>
    <div>
        <a href="silver.html">Silver medals</a>
    </div>

    Then stage the changes: git add medals.html, and commit them: git commit -m "Add links"
        That commit now appears in our history for the myclone repository.
    But this commit does not appear in the medals repository.
    Although we were able to run git pull in the myclone repository to pull in commits from the medals repository, we can't pull from myclone to medals yet.
    When we cloned the medals repository to the myclone repository, medals was automatically set up as a remote repo on myclone.
        But the reverse isn't true. In fact, we can try running git remote from the medals repo, and we won't see any remote repos at all.
    So we're going to need to add myclone as a remote on the medals repo.
        We can do this with the git remote add subcommand.
        git remote add takes two arguments:
        The first is the name we want to give the remote repo. We can use any name we want, but generally it should be all lower-case. We'll use a name of myclone for this remote.
        The second argument will usually be the URL of the remote repository.
            But since this "remote" repo is just another directory on our local computer, we'll give it the path to that directory instead: ../myclone

git remote add myclone ../myclone

    Now let's try running git remote again. This time, we'll see a remote repo with the name we specified, myclone.
    For this first time running git pull, we need to provide two arguments:
        The remote repo we're pulling from: myclone
        The "branch" we want to pull: main | UPDATE - Renaming the default branch from master to main.
        By default, Git repositories start with only one branch, named main.
        Because we haven't created any other branches, our work in the myclone repo will be on the main branch there, as well.

git pull myclone main

    That command will pull our new commit from the myclone remote repo into the medals repo.







