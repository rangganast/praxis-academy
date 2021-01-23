# Create a folder for your project.
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project
$ mkdir rhymes

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project
$ cd rhymes/

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes
$

# To make this directory and empty Git repo do this:
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes
$ git init
Initialized empty Git repository in D:/Project/rhymes/.git/

# I usually create an empty README.txt file for the first commit in my project
# history. 
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ touch README.txt

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git add README.txt

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git commit -m 'First commit.'
[master (root-commit) c26dc8e] First commit.
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.txt

# Add some explanation about the project to the README file.
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ echo 'This repo is a collection of my favorite nursery rhymes.' >> README.txt

# Review uncommitted changes. Then commit them.
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git diff
warning: LF will be replaced by CRLF in README.txt.
The file will have its original line endings in your working directory
diff --git a/README.txt b/README.txt
index e69de29..c83e022 100644
--- a/README.txt
+++ b/README.txt
@@ -0,0 +1 @@
+This repo is a collection of my favorite nursery rhymes.

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git add README.txt
warning: LF will be replaced by CRLF in README.txt.
The file will have its original line endings in your working directory

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git commit -m 'Added project overview to README.txt'
[master f3803e1] Added project overview to README.txt
 1 file changed, 1 insertion(+)

# Alice downloads favorite rhymes.
## Pada URL yang disediakan tidak ditemukan file yang diminta, sehingga saya mengambilnya langsung dari repository pemiliknya
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ wget https://www.acquia.com/sites/default/files/blog/all-around-the-mulberry-bush.txt
wget https://www.acquia.com/sites/default/files/blog/hokey-pokey.txt --2021-01-22 11:54:50--  https://www.acquia.com/sites/default/files/blog/all-around-the-mulberry-bush.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.118.45, 104.16.117.45
Connecting to www.acquia.com (www.acquia.com)|104.16.118.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2021-01-22 11:54:50 ERROR 404: Not Found.

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ wget https://www.acquia.com/sites/default/files/blog/jack-and-jill.txt
--2021-01-22 11:54:50--  https://www.acquia.com/sites/default/files/blog/jack-and-jill.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.118.45, 104.16.117.45
Connecting to www.acquia.com (www.acquia.com)|104.16.118.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2021-01-22 11:54:51 ERROR 404: Not Found.

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ wget https://www.acquia.com/sites/default/files/blog/old-mother-hubbard.txt
--2021-01-22 11:54:51--  https://www.acquia.com/sites/default/files/blog/old-mother-hubbard.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.118.45, 104.16.117.45
Connecting to www.acquia.com (www.acquia.com)|104.16.118.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2021-01-22 11:54:51 ERROR 404: Not Found.

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ wget https://www.acquia.com/sites/default/files/blog/twinkle-twinkle.txt
--2021-01-22 11:54:52--  https://www.acquia.com/sites/default/files/blog/twinkle-twinkle.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.118.45, 104.16.117.45
Connecting to www.acquia.com (www.acquia.com)|104.16.118.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2021-01-22 11:54:52 ERROR 404: Not Found.

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ wget https://www.acquia.com/sites/default/files/blog/hokey-pokey.txt
--2021-01-22 11:54:53--  https://www.acquia.com/sites/default/files/blog/hokey-pokey.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.118.45, 104.16.117.45
Connecting to www.acquia.com (www.acquia.com)|104.16.118.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2021-01-22 11:54:55 ERROR 404: Not Found.

# The files have been downloaded, but not committed.
# You can see this with git status. git status
# Alice adds the files one-by-one to make her git history look nice and tidy.
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git add all-around-the-mulberry-bush.txt
git commit -m 'Added all-around-the-mulberry-bush.txt.'
git add jack-and-jill.txt
git commit -m 'Added jack-and-jill.txt.' warning: LF will be replaced by CRLF in all-around-the-mulberry-bush.txt.
The file will have its original line endings in your working directory

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   all-around-the-mulberry-bush.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        hokey-pokey.txt
        jack-and-jill.txt
        old-mother-hubbard.txt
        twinkle-twinkle.txt

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git commit -m 'Added all-around-the-mulberry-bush.txt.'
[master b15ac22] Added all-around-the-mulberry-bush.txt.
 1 file changed, 19 insertions(+)
 create mode 100644 all-around-the-mulberry-bush.txt

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git add jack-and-jill.txt
warning: LF will be replaced by CRLF in jack-and-jill.txt.
The file will have its original line endings in your working directory

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git commit -m 'Added jack-and-jill.txt.'
[master 6cb836f] Added jack-and-jill.txt.
 1 file changed, 12 insertions(+)
 create mode 100644 jack-and-jill.txt

# Alice gets lazy and decides to just add everything else at once.
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git add .
warning: LF will be replaced by CRLF in hokey-pokey.txt.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in old-mother-hubbard.txt.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in twinkle-twinkle.txt.
The file will have its original line endings in your working directory

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git commit -m 'Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt'
[master 9161b9e] Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt
 3 files changed, 56 insertions(+)
 create mode 100644 hokey-pokey.txt
 create mode 100644 old-mother-hubbard.txt
 create mode 100644 twinkle-twinkle.txt

# Alice reviews and admires her commit history.
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git log
commit 152f9d0bd87c72d09cb0e85027379917bd508fce (HEAD -> master)
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 11:57:36 2021 +0700

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

commit 6cb836f9ea2693222d48997b0bb0f3bf0a1bdb58
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 11:57:00 2021 +0700

    Added jack-and-jill.txt.

commit b15ac228296b30a8465f8ad7342e6a57b7cfc152
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 11:56:54 2021 +0700

    Added all-around-the-mulberry-bush.txt.

commit f3803e1991a693be436c4f73c60645f84fdce2da
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 11:46:46 2021 +0700

    Added project overview to README.txt

commit c26dc8e4336cf80a700e16db19f0e20201df818d
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 11:43:43 2021 +0700

    First commit.

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git log --oneline
152f9d0 (HEAD -> master) Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt
6cb836f Added jack-and-jill.txt.
b15ac22 Added all-around-the-mulberry-bush.txt.
f3803e1 Added project overview to README.txt
c26dc8e First commit.

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git log -p
commit 152f9d0bd87c72d09cb0e85027379917bd508fce (HEAD -> master)
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 11:57:36 2021 +0700

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

diff --git a/hokey-pokey.txt b/hokey-pokey.txt
new file mode 100644
index 0000000..97f425b
--- /dev/null
+++ b/hokey-pokey.txt
@@ -0,0 +1,16 @@
+You put your right foot in,
+You put your right foot out;
+You put your right foot in,
+And you shake it all about.
+You do the Hokey-Pokey,
+And you turn yourself around.
+That's what it's all about!
+
+You put your left foot in...
+You put your right hand in...
+You put your right side in...
+You put your nose in...
+You put your tail in...
+You put your head in...
+You put your whole self in...
+
diff --git a/old-mother-hubbard.txt b/old-mother-hubbard.txt
new file mode 100644
index 0000000..c91ff71
--- /dev/null
+++ b/old-mother-hubbard.txt
@@ -0,0 +1,34 @@
+Old Mother Hubbard
+Went to the cupboard
+To fetch her poor dog a bone;
+But when she came there
+The cupboard was bare,
+And so the poor dog had none.
+She took a clean dish
+To get him some tripe;
+But when she came back
+He was smoking a pipe.
+She went to the grocer's
+To buy him some fruit;
+But when she came back
+He was playing the flute.
+
+She went to the baker's
+To buy him some bread;
+But when she came back
+The poor dog was dead.
+
+She went to the undertaker's
+To buy him a coffin;
+But when she came back
+The poor dog was laughing.
+
+She went to the hatter's
+To buy him a hat;
+But when she came back
+He was feeding the cat.
+
+The dame made a curtsey,
+The dog made a bow;
+The dame said, "Your servant."
+The dog said, "Bow wow!"
diff --git a/twinkle-twinkle.txt b/twinkle-twinkle.txt
new file mode 100644
index 0000000..5585462
--- /dev/null
+++ b/twinkle-twinkle.txt
@@ -0,0 +1,6 @@
+Twinkle, twinkle, little star,
+How I wonder what you are.
+Up above the world so high,
+Like a diamond in the sky.
+Twinkle, twinkle, little star,
+How I wonder what you are.

commit 6cb836f9ea2693222d48997b0bb0f3bf0a1bdb58
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 11:57:00 2021 +0700

    Added jack-and-jill.txt.

diff --git a/jack-and-jill.txt b/jack-and-jill.txt
new file mode 100644
index 0000000..1596bce
--- /dev/null
+++ b/jack-and-jill.txt
@@ -0,0 +1,12 @@
+Jack and Jill
+Went up the hill
+To fetch a pail of water.
+Jack fell down
+And broke his crown
+And Jill came tumbling after.
+Up Jack got
+And home did trot
+As fast as he could caper
+Went to bed
+And plastered his head
+With vinegar and brown paper.

commit b15ac228296b30a8465f8ad7342e6a57b7cfc152
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 11:56:54 2021 +0700

    Added all-around-the-mulberry-bush.txt.

diff --git a/all-around-the-mulberry-bush.txt b/all-around-the-mulberry-bush.txt
new file mode 100644
index 0000000..b77d989
--- /dev/null
+++ b/all-around-the-mulberry-bush.txt
@@ -0,0 +1,19 @@
+All around the mulberry bush
+The monkey chased the weasel.
+The monkey thought 'twas all in fun.
+Pop! goes the weasel.
+
+A penny for a spool of thread,
+A penny for a needle.
+That's the way the money goes.
+Pop! goes the weasel.
+
+Up and down the City Road,
+In and out of the Eagle,
+That's the way the money goes.
+Pop! goes the weasel.
+
+Half a pound of tuppenney rice,
+Half a pound of treacle,
+Mix it up and make it nice,
+Pop! goes the weasel.

commit f3803e1991a693be436c4f73c60645f84fdce2da
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 11:46:46 2021 +0700

    Added project overview to README.txt

diff --git a/README.txt b/README.txt
index e69de29..c83e022 100644
--- a/README.txt
+++ b/README.txt
@@ -0,0 +1 @@
+This repo is a collection of my favorite nursery rhymes.

commit c26dc8e4336cf80a700e16db19f0e20201df818d
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 11:43:43 2021 +0700

    First commit.

diff --git a/README.txt b/README.txt
new file mode 100644
index 0000000..e69de29

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git remote add origin https://github.com/rangganast/rhymes.git

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git push origin master
Enumerating objects: 17, done.
Counting objects: 100% (17/17), done.
Delta compression using up to 4 threads
Compressing objects: 100% (14/14), done.
Writing objects: 100% (17/17), 2.21 KiB | 566.00 KiB/s, done.
Total 17 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), done.
To https://github.com/rangganast/rhymes.git
 * [new branch]      master -> master

# First Bob clones his fork of Alice's rhymes project.
# (If you're following along, replace bryanhirsch below with your own GitHub username.)
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes
$ git clone https://github.com/rangganast/rhymes.git
Cloning into 'rhymes'...
remote: Enumerating objects: 23, done.
remote: Total 23 (delta 0), reused 0 (delta 0), pack-reused 23
Receiving objects: 100% (23/23), done.
Resolving deltas: 100% (4/4), done.

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes
$ cd rhymes

# To keep things simple and tidy, Bob will keep the master branch in sync with Alice's version of the master branch.
# Bob creates a new branch, where he will store his changes.
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (master)
$ git checkout -b hickory-dickory
Switched to a new branch 'hickory-dickory'

# Add Hickory Dickory Dock to the repo.
## Pada URL yang disediakan tidak ditemukan maka saya ambil langsung dari REPOSITORYnya
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (hickory-dickory)
$ wget https://www.acquia.com/sites/default/files/blog/hickory-dickory-dock.txt...
--2021-01-22 12:13:49--  https://www.acquia.com/sites/default/files/blog/hickory-dickory-dock.txt...
Resolving www.acquia.com (www.acquia.com)... 104.16.117.45, 104.16.118.45
Connecting to www.acquia.com (www.acquia.com)|104.16.117.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2021-01-22 12:13:50 ERROR 404: Not Found.

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (hickory-dickory)
$ git add hickory-dickory-dock.txt
warning: LF will be replaced by CRLF in hickory-dickory-dock.txt.
The file will have its original line endings in your working directory

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (hickory-dickory)
$ git commit -m 'Added hickory-dickory-dock.txt.'
On branch hickory-dickory
nothing to commit, working tree clean

# Bob pushes the changes from his local copy of rhymes up to GitHub.
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (hickory-dickory)
$ git push origin hickory-dickory
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 349 bytes | 349.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote:
remote: Create a pull request for 'hickory-dickory' on GitHub by visiting:
remote:      https://github.com/rangganast/rhymes/pull/new/hickory-dickory
remote:
To https://github.com/rangganast/rhymes.git
 * [new branch]      hickory-dickory -> hickory-dickory

# Alice renames origin -> alice.
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project
$ cd rhymes/

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git remote rename origin alice

# Add a remote pointing to Bob's copy of the project.
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git remote add bob https://github.com/bryanhirsch/rhymes.git

# Review remotes.
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git remote
alice
bob

# Confirm each remote points to the correct repository.
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git remote -v
alice   https://github.com/rangganast/rhymes.git (fetch)
alice   https://github.com/rangganast/rhymes.git (push)
bob     https://github.com/rangganast/rhymes.git (fetch)
bob     https://github.com/rangganast/rhymes.git (push)

# Fetch a copy of Bob's work.
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git fetch bob
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 1), reused 3 (delta 1), pack-reused 0
Unpacking objects: 100% (3/3), 329 bytes | 2.00 KiB/s, done.
From https://github.com/rangganast/rhymes
 * [new branch]      hickory-dickory -> bob/hickory-dickory
 * [new branch]      master          -> bob/master

# Review all the branches (both local and remote).
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git branch -a
* master
  remotes/alice/master
  remotes/bob/hickory-dickory
  remotes/bob/master

# Check out a local copy of Bob's work and review it.
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git checkout -b hickory-dickory bob/hickory-dickory
Switched to a new branch 'hickory-dickory'
Branch 'hickory-dickory' set up to track remote branch 'hickory-dickory' from 'bob'.

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (hickory-dickory)
$ git diff master hickory-dickory
diff --git a/hickory-dickory-dock.txt b/hickory-dickory-dock.txt
new file mode 100644
index 0000000..a337f4c
--- /dev/null
+++ b/hickory-dickory-dock.txt
@@ -0,0 +1,5 @@
+Hickory, dickory, dock,
+The mouse ran up the clock.
+The clock struck one,
+The mouse ran down!
+Hickory, dickory, dock.

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (hickory-dickory)
$ git log -1 -p
commit c7d6ec3059ca303ad2c4caf4dd661ba4c13b224b (HEAD -> hickory-dickory, bob/hickory-dickory)
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 12:21:17 2021 +0700

    Added hickory-dickory-dock.txt.

diff --git a/hickory-dickory-dock.txt b/hickory-dickory-dock.txt
new file mode 100644
index 0000000..a337f4c
--- /dev/null
+++ b/hickory-dickory-dock.txt
@@ -0,0 +1,5 @@
+Hickory, dickory, dock,
+The mouse ran up the clock.
+The clock struck one,
+The mouse ran down!
+Hickory, dickory, dock.

# Checkout master and merge Bobs changes in.
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (hickory-dickory)
$ git checkout master
Switched to branch 'master'

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git merge hickory-dickory
Updating 152f9d0..c7d6ec3
Fast-forward
 hickory-dickory-dock.txt | 5 +++++
 1 file changed, 5 insertions(+)
 create mode 100644 hickory-dickory-dock.txt

# Push changes up to GitHub git push alice master
# Remove our local copy of the hickory-dickory branch. We don't need it anymore.
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes
$ cd rhymes/

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (hickory-dickory)
$ git remote rename origin bob

# Add a remote pointing to Alice's copy of the project.
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (hickory-dickory)
$ git remote add alice https://github.com/rangganast/rhymes.git

# Review remotes.
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (hickory-dickory)
$ git remote
alice
bob

# Confirm each remote points to the correct repository. 
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (hickory-dickory)
$ git remote -v
alice   https://github.com/rangganast/rhymes.git (fetch)
alice   https://github.com/rangganast/rhymes.git (push)
bob     https://github.com/rangganast/rhymes.git (fetch)
bob     https://github.com/rangganast/rhymes.git (push)

# Update master branch. 
# (As an alternative to fetch, use `remote update` to update all your remotes.)
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (hickory-dickory)
$ git remote update
Fetching bob
Fetching alice
From https://github.com/rangganast/rhymes
 * [new branch]      hickory-dickory -> alice/hickory-dickory
 * [new branch]      master          -> alice/master

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (hickory-dickory)
$ git checkout master
Switched to branch 'master'
Your branch is up to date with 'bob/master'.

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (master)
$ git merge alice/master
Already up to date.

# To confirm you did everything right check the difference between your local copy of master 
# and Alice's master branch. There should be no difference. 
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (master)
$ git diff alice/master

# Push to GitHub 
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (master)
$ git push bob master
Everything up-to-date

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (hickory-dickory)
$ git checkout -b bobs-changes
Switched to a new branch 'bobs-changes'

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ wget https://www.acquia.com/sites/default/files/blog/jack-be-nimble.txt
git add mother-goose.txt
git commit -m 'Added mother-goose.txt.'--2021-01-22 12:41:40--  https://www.acquia.com/sites/default/files/blog/jack-be-nimble.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.117.45, 104.16.118.45
Connecting to www.acquia.com (www.acquia.com)|104.16.117.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2021-01-22 12:41:41 ERROR 404: Not Found.

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ git add jack-be-nimble.txt

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ git commit -m 'Added jack-be-nimble.txt.'
[bobs-changes d34c3dc] Added jack-be-nimble.txt.
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 jack-be-nimble.txt

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ wget https://www.acquia.com/sites/default/files/blog/mother-goose.txt
--2021-01-22 12:41:41--  https://www.acquia.com/sites/default/files/blog/mother-goose.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.117.45, 104.16.118.45
Connecting to www.acquia.com (www.acquia.com)|104.16.117.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2021-01-22 12:41:42 ERROR 404: Not Found.

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ git add mother-goose.txt

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ git commit -m 'Added mother-goose.txt.'
[bobs-changes 2697d6d] Added mother-goose.txt.
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 mother-goose.txt

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ git commit -am 'Updated README.txt.'
[bobs-changes d8ed344] Updated README.txt.
 1 file changed, 1 insertion(+), 1 deletion(-)

# Review changes word-by-word. Commit.
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ git diff --word-diff
diff --git a/README.txt b/README.txt
index 94ae9b6..78724ab 100644
--- a/README.txt
+++ b/README.txt
@@ -1 +1 @@
This repo is a collection of Alice's favorite nursery rhymes. Pull [-reqests-]{+requests+} accepted.

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ git commit -am 'Fixed typo in README.txt.'
[bobs-changes 58ff290] Fixed typo in README.txt.
 1 file changed, 1 insertion(+), 1 deletion(-)

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ git commit -am 'Updated README.txt.'
[bobs-changes cc1ae41] Updated README.txt.
 1 file changed, 1 insertion(+), 1 deletion(-)

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ git commit -am 'Updated README.txt.'
[bobs-changes d12c069] Updated README.txt.
 1 file changed, 1 insertion(+), 1 deletion(-)

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ wget https://www.acquia.com/sites/default/files/blog/old-king-cole.txt
git add twinkle-twinkle.txt
git commit -m 'Added twinkle-twinkle.txt.'--2021-01-22 12:47:19--  https://www.acquia.com/sites/default/files/blog/old-king-cole.txt
Resolving www.acquia.com (www.acquia.com)... 104.16.118.45, 104.16.117.45
Connecting to www.acquia.com (www.acquia.com)|104.16.118.45|:443... connected.
HTTP request sent, awaiting response... 404 Not Found
2021-01-22 12:47:19 ERROR 404: Not Found.

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ git add old-king-cole.txt

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ git commit -m 'Added old-king-cole.txt.'
[bobs-changes 6f6a274] Added old-king-cole.txt.
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 old-king-cole.txt

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ git add twinkle-twinkle.txt

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ git commit -m 'Added twinkle-twinkle.txt.'
On branch bobs-changes
nothing to commit, working tree clean

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ git commit -am 'Updated README.txt.'
[bobs-changes 618bb0f] Updated README.txt.
 1 file changed, 1 insertion(+), 1 deletion(-)

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ git log
commit 618bb0f6a8306552589fd8c3492a6a4ffb8d6d67 (HEAD -> bobs-changes)
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 12:49:54 2021 +0700

    Updated README.txt.

commit 6f6a274c6496218ea6cb865735ba221f1d78c538
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 12:47:57 2021 +0700

    Added old-king-cole.txt.

commit d12c069af900624513a2558325fef67f1a77625c
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 12:46:18 2021 +0700

    Updated README.txt.

commit cc1ae413591657e64571077de3c9d174f025e596
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 12:46:07 2021 +0700

    Updated README.txt.

commit 58ff29088dd8cf650e9e31c284c8dbcd8008ccbc
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 12:44:46 2021 +0700

    Fixed typo in README.txt.

commit d8ed34401ddc7aa1ccf379e7817a62ac9f6a9d64
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 12:43:59 2021 +0700

    Updated README.txt.

commit 2697d6d8867f012071f08e6c4b24d54d51568fc1
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 12:41:44 2021 +0700

    Added mother-goose.txt.

commit d34c3dc40a5099adfcb22c86394cebb689c4713f
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 12:41:41 2021 +0700

    Added jack-be-nimble.txt.

commit c7d6ec3059ca303ad2c4caf4dd661ba4c13b224b (bob/hickory-dickory, alice/hickory-dickory, hickory-dickory)
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 12:21:17 2021 +0700

    Added hickory-dickory-dock.txt.

commit 152f9d0bd87c72d09cb0e85027379917bd508fce (bob/master, bob/HEAD, alice/master, master)
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 11:57:36 2021 +0700

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

commit 6cb836f9ea2693222d48997b0bb0f3bf0a1bdb58
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 11:57:00 2021 +0700

    Added jack-and-jill.txt.

commit b15ac228296b30a8465f8ad7342e6a57b7cfc152
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 11:56:54 2021 +0700

    Added all-around-the-mulberry-bush.txt.

commit f3803e1991a693be436c4f73c60645f84fdce2da
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 11:46:46 2021 +0700

    Added project overview to README.txt

commit c26dc8e4336cf80a700e16db19f0e20201df818d
Author: rangganast <rangganast@gmail.com>
Date:   Fri Jan 22 11:43:43 2021 +0700

    First commit.

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ git log --oneline
618bb0f (HEAD -> bobs-changes) Updated README.txt.
6f6a274 Added old-king-cole.txt.
d12c069 Updated README.txt.
cc1ae41 Updated README.txt.
58ff290 Fixed typo in README.txt.
d8ed344 Updated README.txt.
2697d6d Added mother-goose.txt.
d34c3dc Added jack-be-nimble.txt.
c7d6ec3 (bob/hickory-dickory, alice/hickory-dickory, hickory-dickory) Added hickory-dickory-dock.txt.
152f9d0 (bob/master, bob/HEAD, alice/master, master) Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt
6cb836f Added jack-and-jill.txt.
b15ac22 Added all-around-the-mulberry-bush.txt.
f3803e1 Added project overview to README.txt
c26dc8e First commit.

# Rewrite history going back as far as commit 4b15370.
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ git rebase -i c7d6ec3

pick d34c3dc Added jack-be-nimble.txt.
pick 2697d6d Added mother-goose.txt.
pick d8ed344 Updated README.txt.
pick 58ff290 Fixed typo in README.txt.
pick cc1ae41 Updated README.txt.
pick d12c069 Updated README.txt.
pick 6f6a274 Added old-king-cole.txt.
pick 618bb0f Updated README.txt.

# Rebase c7d6ec3..618bb0f onto c7d6ec3 (8 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ git rebase -i c7d6ec3
[detached HEAD 4f8f23b] Updated README.txt.
 Date: Fri Jan 22 12:43:59 2021 +0700
 1 file changed, 1 insertion(+), 1 deletion(-)
Successfully rebased and updated refs/heads/bobs-changes.

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ git log --oneline
4f8f23b (HEAD -> bobs-changes) Updated README.txt.
4ba4b46 Added old-king-cole.txt.
2697d6d Added mother-goose.txt.
d34c3dc Added jack-be-nimble.txt.
c7d6ec3 (bob/hickory-dickory, alice/hickory-dickory, hickory-dickory) Added hickory-dickory-dock.txt.
152f9d0 (bob/master, bob/HEAD, alice/master, master) Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt
6cb836f Added jack-and-jill.txt.
b15ac22 Added all-around-the-mulberry-bush.txt.
f3803e1 Added project overview to README.txt
c26dc8e First commit.

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/bob-rhymes/rhymes (bobs-changes)
$ git push bob bobs-changes
Enumerating objects: 12, done.
Counting objects: 100% (12/12), done.
Delta compression using up to 4 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (10/10), 981 bytes | 490.00 KiB/s, done.
Total 10 (delta 4), reused 1 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (4/4), completed with 1 local object.
remote:
remote: Create a pull request for 'bobs-changes' on GitHub by visiting:
remote:      https://github.com/rangganast/rhymes/pull/new/bobs-changes
remote:
To https://github.com/rangganast/rhymes.git
 * [new branch]      bobs-changes -> bobs-changes