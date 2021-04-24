# git学习

## 1. git相关基础命令

### 1.1 增加/删除文件

```bash
# 添加指定文件到暂存区
# 以空格隔开可以一次 add 多个文件
$ git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
$ git add [dir] [file] [dir] [file] [file] ...

# 添加当前目录的所有文件到暂存区，包括子目录
$ git add .

# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
$ git add -p

# 删除工作区文件，并且将这次删除放入暂存区
# -f 是 force 是简写，强制删除的意思
# 删除文件并直接进入暂存区，以待下一次提交
$ git rm -f [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
$ git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
$ git mv [file-original] [file-renamed]
```

### 1.2  .gitconfig配置

```bash
# 显示当前的Git配置
$ git config --list

# 编辑Git配置文件
$ git config -e [--global]

# 设置提交代码时的用户信息
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"

#查看配置的信息
git config --list 

#获取帮助信息
git help config 
```

### 1.3. 代码提交

```bash
# 提交暂存区到仓库区
$ git commit -m [message]

# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m [message]

# 提交工作区自上次commit之后的变化，直接到仓库区
# 注意：不包括未跟踪文件
$ git commit -a -m "提交日志"

# 提交时显示所有diff信息
$ git commit -v

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
# 如果代码有变化，则将本次变化和最后一次提交混合形成历史记录
$ git commit --amend -m [message]

# 重做上一次commit，并包括指定文件的新变化
$ git commit --amend [file1] [file2] ...
```

### 1.4  查看状态

```bash
# 最好用的是 gitk
$ gitk

# 显示有变更的文件
$ git status

# 显示当前分支的版本历史
$ git log

# 显示commit历史，以及每次commit发生变更的文件
$ git log --stat

# 搜索提交历史，根据关键词
$ git log -S [keyword]

# 显示某个commit之后的所有变动，每个commit占据一行
$ git log [tag] HEAD --pretty=format:%s

# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
$ git log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]

# 显示指定文件相关的每一次diff
$ git log -p [file]

# 显示过去5次提交
$ git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
$ git shortlog -sn

# 显示指定文件是什么人在什么时间修改过
$ git blame [file]

# 显示暂存区和工作区的差异
$ git diff

# 显示暂存区和上一个commit的差异
$ git diff --cached [file]

# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD

# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
$ git diff --shortstat "@{0 day ago}"

# 显示某次提交的元数据和内容变化
$ git show [commit]

# 显示某次提交发生变化的文件
$ git show --name-only [commit]

# 显示某次提交时，某个文件的内容
$ git show [commit]:[filename]

# 显示当前分支的最近几次提交
$ git reflog
```

### 1.5  撤销操作

```bash
# 修改最后一次提交
# 如果暂存区没有新的内容，则仅仅修改提交日志
# 如果有新内容，则将本地新内容混入修改的提交中
git commit --amend -m "xxx"

# 恢复暂存区的指定文件到工作区
$ git checkout [file]

# 恢复某个commit的指定文件到暂存区和工作区
$ git checkout [commit] [file]

# 
$ git checkout [commit]

# 恢复暂存区的所有文件到工作区
$ git checkout .

# 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变
$ git reset [file]

# 重置暂存区与工作区，与上一次commit保持一致（也就是说加了--hard的话会强制将没有commit的文件覆盖掉）
$ git reset --hard

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
$ git reset [commit]

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
$ git reset --hard [commit]

# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
$ git reset --keep [commit]

# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
$ git revert [commit]

# 暂时将未提交的变化移除，稍后再移入
$ git stash
$ git stash pop
```

### 1.6  标签

```bash
# 列出所有tag
$ git tag

# 新建一个tag在当前commit
$ git tag [tag]

# 新建一个tag在指定commit
$ git tag [tag] [commit]

# 删除本地tag
$ git tag -d [tag]

# 删除远程tag
$ git push origin :refs/tags/[tagName]

# 查看tag信息
$ git show [tag]

# 提交指定tag
$ git push [remote] [tag]

# 提交所有tag
$ git push [remote] --tags

# 新建一个分支，指向某个tag
$ git checkout -b [branch] [tag]

```

### 1.7  分支

```bash
# 新建一个分支，但依然停留在当前分支
$ git branch [branch-name]

# 切换到指定分支，并更新工作区
$ git checkout [branch-name]

# 新建一个分支，并切换到该分支
$ git checkout -b [branch]

# 新建一个分支，指向指定commit
$ git branch [branch] [commit]

# 切换到上一个分支
$ git checkout -

# 列出所有本地分支
$ git branch

# 列出所有远程分支
$ git branch -r

# 列出所有本地分支和远程分支
$ git branch -a

# 合并指定分支到当前分支
$ git merge [branch]

# 删除分支
$ git branch -d [branch-name]

# 新建一个分支，与指定的远程分支建立追踪关系
$ git branch --track [branch] [remote-branch]

# 建立追踪关系，在现有分支与指定的远程分支之间
$ git branch --set-upstream [branch] [remote-branch]

# 选择一个commit，合并进当前分支
$ git cherry-pick [commit]

# 删除远程分支
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]

# 创建一个全新的分支 不包含原分支的提交历史
$ git checkout --orphan gh-pages
```

## 2. 远程仓库使用

### 2.1  克隆线上仓库

```bash
git clone 仓库地址
```

​	先写代码，写完代码提交本地仓库然后

```bash
# clone 下来的仓库会自动创建一个名字叫 origin 的 remote 远端地址
# 并且自动和 origin master 建立关系
# 所以你这里可以直接 git push
git push
```

但是，如果要是推送别的分支代码，还是得：

```bash
git push -u 仓库地址别名 本地分支:远程分支
```



### 2.2 将本地仓库放在线上

如何把一个本地仓库放到 GitHub：

1. 在 GitHub 中新建一个远程仓库
2. 在本地仓库下执行

```bash
# 别名我们通常喜欢使用 origin 作为默认仓库的别名
$ git remote add 别名 远程仓库地址

# 当本地分支和远程分支名字一样的时候，可以简写只写一些
# -u 的作用是记住本次的 push 地址和分支信息
# 如果不加 -u，则下一次 push 的时候，还需要使用完整的命令
$ git push -u 远程仓库地址别名 本地分支:远程分支

如果要推送的本地分支和远端分支已有，可以简写为
git push origin 分支
```

之后有了新的历史记录的时候，直接 ：

```bash
git push
```

推送不同分支的话

```bash
$ git push -u 远程仓库地址别名 本地分支:远程分支
```

### 2.3   拉取和更新远程仓库的代码

```bash
# 下载远程仓库的所有变动
$ git fetch [remote]

# 显示所有远程仓库
$ git remote -v

# 显示某个远程仓库的信息
$ git remote show [remote]

# 增加一个新的远程仓库，并命名
$ git remote add [shortname] [url]

# 直接拉取远程仓库当前分支的代码
$ git pull

# 取回远程仓库的变化，并与本地分支合并
$ git pull [remote] [branch]

# 上传本地指定分支到远程仓库
$ git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
$ git push [remote] --force

# 推送所有分支到远程仓库
$ git push [remote] --all
```

### 2.4npm切换镜像源

```bash
# 切换淘宝镜像
npm config set registry https://registry.npm.taobao.org

# 切换国外镜像
npm config set registry https://registry.npmjs.org/

# http://npm-registry.iyunxiao.com 爱云校的镜像
```



## 3.  git应用技巧

### 3.1  创建线上分支

1. 切换本地master分支，然后执行`git checkout -b 新分支名` 在本地新创建一个分支

2. 执行`git push` 往线上推送一下，这个时候因为线上没有新创建的这个分支他会提示`git push --set-upstream origin 新分支名`

3. 这个时候就直接执行它提示的这个就可以直接在线上仓库创建这个分支，并把本地代码提交上去了

### 3.2  git回退之前版本

1. git在提交提交仓库的时候会生成commit ID 执行命令`git log`可以查看之前提交生成的commit ID

2. 回退上一个版本的话需要执行`git reset --hard HEAD^`，就可以回退到上一个的版本了，

   > 首先，Git必须知道当前版本是哪个版本，在Git中，用`HEAD`表示当前版本，上一个版本就是`HEAD^`，上上一个版本就是`HEAD^^`，当然往上100个版本写100个`^`比较容易数不过来，所以写成`HEAD~100`。

3. 回退到指定版本的话就直接执行`git reset -- hard commitID`就可以了

4. 回退到之前的版本以后，再次执行git log 回发现后面提交的记录不见了，此时要想回到之后提交的版本的话可以使用`git  reflog`查看之后提交的版本号，拿到版本号以后执行` git reset -- hard commitID`就可以了

   > `git reflog`   和 `git log`的区别
   >
   > ​			前者是可以看到所以所有的记录包括删除，会退， add，commit等等的所有操作的记录
   >
   > ​			后者是只可以看到commit记录
   >
   > `git reset`的时候加不加--hard的去别
   >
   > ​			加的话会在回退版本的时候直接覆盖到本地目前还没有commit的所有代码，也包括已经add过但还没commit的
   >
   > ​			不加的话不会，所以在使用这个命令的时候最好还是不要加 -- hard
   >
   > 如果真的不小心就是用了的话不要，那就要想办法处理了

   

   

 回滚操作（网上找来的方法，估计不一定靠谱）

在本地要想回滚到之前的某个版本需要做以下操作（没有提交远程分支）

1. 执行`git log` 查看你要回滚的commitID 
2. 然后执行`git checkout commitID` 回滚到之前的版本
3. 此时你执行`git branch`会发现现在你正在一个临时的分支上
4. 如果你要在这个会退回来的版本是上做一些操作的，可以在这个临时分支的基础上重新创建一个分支操作
5. 如果需要再切换到正在开发的分支的话，就直接切换到正在开发的分支就行了

回滚到之前版本（已经提交远程仓库）

1. 使用`revert`命令，`revert`命令其实就是提交一个新的`commit`来回滚之前的`commit`。
2. 如果想要回滚到之前的某一个状态，那么需要`revert`掉之前的`commit`
3. 执行`git revert 之后的commiID 之后的commitID 之后的commitID` 删除需要回滚的之后的所有commit记录
4. 然后就可以push了

### 3.3存储修改未提交

```bash
$ git stash  代码可以恢复到任何的分支上去
```

正在写代码时候有别的时候要做了，比如要去修改个bug，但是本地代码还没写好也没提交此时就可以这么做

1. 使用`git stash` 将修改以后未提交的代码放在仓储中暂存起来，

2. 然后就可以正常切换分支修改提交代码了

3. 在修改完bug或完其他的操作之后切换到刚才正在开发的分支执行命令git stash list可以查看仓储的存储记录，

4. 恢复方式如下：

   > 1. 执行`git stash apply` 可以直接恢复，但是仓储中的存储记录还在
   >
   >    要想删除记录的话直接执行`git stash drop`就可以把仓储中的记录删除了
   >
   > 2. 直接执行`git stash pop` 恢复代码并删除仓储的存储记录

### 3.4 git中关于test分支的操作

1. test能不能直接合并master分支

   > 不能
   >
   > 因为test分支只是一个测试分支，有时候可能会有很多个迭代同时在进行同时在测试，如果只是自己这一部分代码测试好了别人的还没测试好，肯定是不能合并master然后合并到线上的呀，有时候test分支上可能还有很多垃圾代码，所以他不能直接合并到master，要想合并master的话在自己的代码测试ok后从自己的开发分支合并上去

2. test分支能不能直接修改

   > 不能
   >
   > 因为改bug的话，改完测试没问题的话肯定是要直接提交到线上的，test分支不能直接合并到master，所以只能从自己的开发分支合并到master，但是在test分支上改完以后你自己的开发分支上是没有你修改的代码的，所以修改bug等等的所有操作多是不能直接在test分支上操作的，都需要自己去切一个分支去操作

### 3.4 没有切换分支就进行了开发提交

情景1:  在开发时没有切换分支就进行了开发，并且在开发完了以后就进行了commit，当commit以后才发现分支是错误的，怎么办?

解决方法：

1. > 首先reset 到当前提交的版本的之前一个版本，然后再它就会把上次commit的代码放在工作区里面，然后再使用`git stash `将代码放进暂存区，最后切换到正确的分支上，再使用`git stash pop `还原就行了

### 3.5拉取远程分支到本地

先把远程分支拉取到本地来

`git fetch origin  远程分支名` 

执行完了以后会提示

```bash
 # fix-0609 是我远程分支的名字
 * branch              fix-0609   -> FETCH_HEAD
 * [new branch]        fix-0609   -> origin/fix-0609
```

此时是告诉你要在本地建立一个分支并且和远程分支建立起关联

可以执行

`git checkout -b  本地分支名  orgin/远程分支名`

远程分支和本地分支就关联起来了 可以pull或者push了

### 3.6 修改本地分支名称

1. 是当前分支：`git branch -m 原分支名称`
2. 不是当前分支`git branch -m 原分支名 新分支名`



### 3.7 关闭本地占用的端口号

查询端口号被谁占用  `lsof -i: 8009`

```bash
rqxde-MacBook-Air:analysis-front rqx$ lsof -i:8009
COMMAND PID USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    805  rqx   15u  IPv6 0xca4901061b904643      0t0  TCP *:8009 (LISTEN)
# 805 就是被占用的位置 
```

查询出被占用的位置后关闭占用  `kill 805`



### 3.8回滚到上上个版本，但不覆盖上个版本的修改

当修改了向项目中的内容以后并且已经 commit了，但还没有push呢， 此时发现修改的有问题，需要回到上上个版本，但是又不想被覆盖掉刚刚commit的内容

此时可以使用`git reset --sort HARD~1`



### 3.9 git 基础配置

```bash
# 显示当前的Git配置 
$ git config --list 
# 设置提交代码时的用户信息
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"



```

### 3.10 git 某个分支的代码完全覆盖当前分支

这个操作要区别于git merge dev的是 merge操作是把其他分支修改代码合并到当前分支，当前分支的一些不同代码还在，而这个命令是直接完全覆盖掉当前分支的所有代码

```bash
git checkout master  #切换到需要被覆盖的分支
git reset --hard dev #然后执行这个dev是你想用那个分支覆盖当前分支比如dev覆盖master
git push origin master --force #当前分支代码强制推送到远程仓库里
```



