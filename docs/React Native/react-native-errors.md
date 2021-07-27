## 无android文件夹

当使用git上传react native项目时，默认不上传android和ios文件夹，这就导致我们clone react native项目时无法运行。

报错：

```shell
yarn run v1.22.10
$ react-native run-android
error Android project not found. Are you sure this is a React Native project? If your Android files are located in a non-standard location (e.g. not inside 'android' folder), consider setting `project.android.sourceDir` option to point to a new location.
info Run CLI with --verbose flag for more details.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

**解决方法**

```shell
yarn add react-native-eject 
yarn react-native eject
```

## 应用大小超过64K

当应用大小超过64K时需要修改android文件夹里的文件这样才能编译。

报错：

```shell
FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:mergeDexDebug'.
> A failure occurred while executing com.android.build.gradle.internal.tasks.Workers$ActionFacade
   > com.android.builder.dexing.DexArchiveMergerException: Error while merging dex archives: 
     The number of method references in a .dex file cannot exceed 64K.
     Learn how to resolve this issue at https://developer.android.com/tools/building/multidex.html

```

**解决方法**

**/android/app/build.gradle**

```javascript
android {
	...
    defaultConfig {
        multiDexEnabled true
    }
    dependencies {
        ...
        implementation 'com.android.support:multidex:1.0.3'
    }
}
```

