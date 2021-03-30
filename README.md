# test-main
main

## 使用 subtree

> --prefix=项目相对路径

- 添加子模块

```
git subtree add --prefix=test-subtree https://github.com/87-midnight/test-subtree.git master --squash
```

- 独立的子模块提交了commit后

> 在当前父模块下，执行拉取

```
 cd ./test-subtree
git subtree pull  --prefix=test-subtree https://github.com/87-midnight/test-subtree.git master --squash
```