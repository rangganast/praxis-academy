# 1. Adding Team Members
Pada github, terdapat dua cara konfigurasi github untuk melakukan kolaborasi

### 1. Organizations
Organizations bisa dikonfigurasi apabila terdapat banyak anggota yang mengerjakan suatu projek dengan berbagai permission level.
Pembuatan organisasi dapat dilakukan pada github dengan langkah berikut:
1. Pada pojok kanan atas, terdapat ikon (+), klik ikon tersebut akan muncul dropdown, lalu pilih **New Organization**
2. Lalu pilih plan untuk organization (misal pilih **Join for free**)
3. Lalu masukkan **Organization account name** dan **Contact email** dan pilih opsi pada **This organization belongs to:**, lalu klik **Next**
4. Selanjutnya akan ada opsi untuk menambahkan member organization, klik **Skip this step** jika ingin melewati.
5. Selanjutnuya isi survey yang akan diberikan oleh pihak github

Pada organization, langkah selanjutnya adalah membuat **Team**. Pada satu organisasi, bisa terdapat beberapa teams, dan satu member bisa masuk beberapa team yang berbeda.

Pembuatan team dapat dilakukan pada github dengan langkah berikut:
1. Pada dashboard organisasi, pilih **Teams**, lalu klik **New team**
2. Lalu isi semua form pada laman **Create new team**
3. Setelah team dibuat, invite member baru dengan cara mengklik tombol **Add a member** pada tab **Members** pada dashboard team

### 2. Collaborators
Collaborator adalah user lain yang bisa diinvite untuk mengerjakan projek di repository yang kita miliki.
Untuk menambahkan collaborator pada repo kita, dapat dilakukan dengan langkah berikut:
1. Pada dashboard repository kita, klik **Settings**
2. Klik **Manage access** pada menu di sebelah kiri
3. Klik **Invite a collaborator** untuk menambahkan collaborator

# 2. Pull Requests
Pull requests adalah cara untuk berkontribusi pada suatu repository dengan cara melakukan forking.
Langkah-langkah untuk melakukan pull requests dengan forking:
1. Buka repository yang ingin dikontribusi, lalu fork repository tersebut ke github kita dnegan menekan tombol **Fork** di kanan atas
2. Selanjutnya, clone repository tersebut ke komputer local agar bisa membuat pull request baru
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project
$ git clone https://github.com/rangganast/CI.git
Cloning into 'CI'...
remote: Enumerating objects: 16, done.
remote: Counting objects: 100% (16/16), done.
remote: Compressing objects: 100% (11/11), done.
remote: Total 16 (delta 3), reused 15 (delta 2), pack-reused 0
Receiving objects: 100% (16/16), done.
Resolving deltas: 100% (3/3), done.

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project
$ cd CI/

3. Setelah itu buat branch baru
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/CI (master)
$ git checkout -b fitur-baru
Switched to a new branch 'fitur-baru'

4. Buat perubahan pada project dan commit perubahan lalu checkout ke master
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/CI (fitur-baru)
$ git add .

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/CI (fitur-baru)
$ git commit -m "fitur bari"
[fitur-baru 1880f25] fitur bari
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 new-change.txt

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/CI (fitur-baru)
$ git checkout master
Switched to branch 'master'
Your branch is up to date with 'origin/master'.

5. Push branch yang telah dibuat ke repo
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/CI (master)
$ git branch
  fitur-baru
* master
  rm

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/CI (master)
$ git remote -v
origin  https://github.com/rangganast/CI.git (fetch)
origin  https://github.com/rangganast/CI.git (push)

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/CI (master)
$ git push origin fitur-baru
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 266 bytes | 266.00 KiB/s, done.
Total 3 (delta 1), reused 1 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote:
remote: Create a pull request for 'fitur-baru' on GitHub by visiting:
remote:      https://github.com/rangganast/CI/pull/new/fitur-baru
remote:
To https://github.com/rangganast/CI.git
 * [new branch]      fitur-baru -> fitur-baru

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/CI (master)

6. Masuk ke menu **Pull request** pada repository, lalu klik **Compare & pull request** pada branch yang telah kita buat
7. Setelah itu pull request akan masuk ke pemilik repository

Langkah selanjutnya adalah merging terdapat dua cara untuk melakukan merging:
1. On repository => dengan cara mengklik tombol **Merge pull request** pada repository -> menu **Pull requests**
2. On local machines => dengan cara melakukan pull terhadap branch yang ingin di pull, lalu melakukan command **git merge <nama-branch>**

# 3. Bug Tracking
Pada github, kita bisa menambahkan **issue** seperti bugs, features maupun todo list.
Langkah-langkahnya adalah sebagai berikut:
1. Masuk ke repository yang ingin ditambahkan issue, lalu masuk ke tab **Issues**
2. Klik tombol **New issue** di sebelah kanan
3. Masukkan judul dan deskripsi issue, lalu pilih label pada sebelah kanan
4. Klik **Submit new issue**

Issue bisa dinyatakan closed dengan mengklik **Close issue** pada laman github, ataupun dengan melakukan special command pada saat kita melakukan commit

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git add .

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git commit -m "add rhymes. close #1"
[master 7c5eb2b] add rhymes. close #1
 1 file changed, 1 insertion(+)

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/rhymes (master)
$ git push alice master
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 292 bytes | 292.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/rangganast/rhymes.git
   152f9d0..7c5eb2b  master -> master

Kita juga bisa menghubungkan satu issue dengan yang lainnya dengan menambahkan id issue pada deskripsi issue kita.

# 4. Analytics
Kita bisa melihat perkembangan pada repository kita pada tab **Insights**
Terdapat banyak menu di sebelah kiri yang bisa kita lihat.

# 5. Project Management
Manajemen pada github bisa dilakukan secara visual dengan menghubungkan repository ke board trello.
Berikut langkah-langkahnya:
1. Masuk ke trello.com lalu buat board baru
2. Pada board yang telah dibuat, buka Menu di sebelah kanan lalu klik **Add Power-Up**
3. Cari github pada Power-Ups lalu klik **Add**
4. Lalu koneksikan github kita ke trello
5. Klik github, lalu klik **Edit Power-Up Settings**
6. Klik Add Repo untuk menambahkan repository
7. Setelah repository ditambahkan, akan muncul tombol menuju repository kita di kanan atas board
8. Saat kita menambahkan card pada board, kita bisa attach branch, commit, issue, maupun pull requests dari github.

# 6. Continuous Integration
Continuous Integration dilakukan agar siklus pengembangan aplikasi dapat berjalan terus tanpa terputus. Terdapat build automation yang dapat mendeteksi error secara cepat. Travis adalah salah satu aplikasi yang dipakai untuk melakukan CI.
Langkah-langkah untuk menambahkan Travis pada repository:
1. Hubungkan akun github dengan Travis (login akun Travis menggunakan akun github)
2. Setelah masuk, pilih repository yang akan dipakai di travis (aktivasi terlebih dahulu jika belum)
3. Setelah itu, jika ada commit yang dilakukan akan ada notifikasi pada commit apakah commit tersebut sudah lulus test dari travis atau belum

# 7. Code Review
Pada github setiap baris dari commit bisa ditambahkan review/comment. Pada github juga bisa dilakukan perbandingan antar branch antar tag maupun antar SHA1.

# 8. Documenting
Dokumentasi pada github bisa dilakukan dengan memakai fitur dari github yaitu github wiki.
Cara menambahkan github wiki sebagai submodule:
1. Buat wiki di repository yang kita inginkan
2. Selanjutnya copy link wiki di kanan bawah
3. Gunakan command git submodule untuk memasukkan wiki sebagai submodule
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/travis-example (master)
$ git submodule add https://github.com/rangganast/travis-example.wiki.git
Cloning into 'D:/Project/travis-example/travis-example.wiki'...
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 5 (delta 1), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (5/5), done.
Resolving deltas: 100% (1/1), done.
warning: LF will be replaced by CRLF in .gitmodules.
The file will have its original line endings in your working directory

4. Commit submodule ke repository
rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/travis-example (master)
$ git add .
warning: LF will be replaced by CRLF in .gitmodules.
The file will have its original line endings in your working directory

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/travis-example (master)
$ git commit -m "added wiki as submodule"
[master 6e1e554] added wiki as submodule
 3 files changed, 7 insertions(+), 1 deletion(-)
 create mode 100644 .gitmodules
 create mode 160000 travis-example.wiki

rangganast@DESKTOP-P5D66DA MINGW64 /d/Project/travis-example (master)
$ git push origin master
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 4 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 570 bytes | 285.00 KiB/s, done.
Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/rangganast/travis-example.git
   5ab2b73..6e1e554  master -> master