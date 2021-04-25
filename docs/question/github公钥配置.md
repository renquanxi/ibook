# github密钥配置

git的密钥配置不管是github还是gitlib，或者是mac还是windows方法都是一样的

首先切换的.ssh/文件加下面，一般mac无论在哪个文件夹下都可以直接执行`cd ~/.ssh/`就可以直接切换到了
windows需要手动找到，一般都存在用户的文件下。

基于.ssh/文件夹下面执行

```bash
ssh-keygen -t rsa -C " your Email "
```

除了（y/n）其他一路回车，遇到这个`Enter passphrase (empty for no passphrase):`这个是让你数公钥密码的，你可以输，也可以不输，如果输入了，那等在git上配置了公钥以后，之后提交代码的时候则都需要输入公钥密码，我一般选择不设置公钥密码

公钥生成以后执行`vim id_rsa.pub`
把公钥复制出来，打开git，把公钥配置进去即可

#### Git 每次提交代码都要输入密码/Git Enter passphrase for key ‘/c/Users/***/.ssh/id_rsa‘ 解决方法

你ssh-keygen -t rsa -C "邮箱"生成的时候，添加了密码！！

这导致你每次拉取代码的时候本地私钥都要到公钥那里去验证密码！！

很简单按照上面生成公钥的方法重新生成一下公钥配置到git上

！！不要填写密码

设置密钥的时候除了选择yes/no ,其他都不要选，直接enter！！


```bash
Last login: Sat Apr 24 17:12:15 on ttys006
renquanxide-MacBook-Air:api-proto rqx$ cd ~/.ssh/
renquanxide-MacBook-Air:.ssh rqx$ ssh-keygen -t rsa -C "mr_renqx@163.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/rqx/.ssh/id_rsa): 
/Users/rqx/.ssh/id_rsa already exists.
Overwrite (y/n)? y
Enter passphrase (empty for no passphrase): ** !!! 这里直接enter **
Enter same passphrase again: ** !!! 这里直接也enter **
Your identification has been saved in /Users/rqx/.ssh/id_rsa.
Your public key has been saved in /Users/rqx/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:7MuFQPoJ1eswIIR+5LF9PBwK56Kupv+B+pQ74T4Ycnc mr_renqx@163.com
The key's randomart image is:
+---[RSA 2048]----+
| ..              |
|.. + . o         |
|. + O * o        |
| . * O * .       |
|  o + = S        |
|o.oo.oEB .       |
|o=+o..o + .      |
|.=+. . . o       |
|B+=+.   o        |
+----[SHA256]-----+
```
