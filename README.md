# test-main
main

## 使用 subtree

> --prefix=项目相对路径

- 添加子模块

```
git subtree add --prefix=test-subtree https://github.com/87-midnight/test-subtree.git main --squash
```

- 独立的子模块提交了commit后

> 在当前父模块下，执行拉取

```
 cd ./test-subtree
git subtree pull  --prefix=test-subtree https://github.com/87-midnight/test-subtree.git main --squash
```

- 如果在当前父模块下修改了test-subtree 并且已提交，需要把代码同步到子模块的仓库上，然后子模块再继续写代码

```
git subtree push --prefix=test-subtree https://github.com/87-midnight/test-subtree.git main
```