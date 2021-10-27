# 在Arch Linux(或Manjaro)中安装python运行环境

## 方式1

使用Arch自带包管理器**pacman**

安装python3

```terminal
sudo pacman -S python39
```

安装pip

```terminal
sudo pacman -S python-pip
```

## 方式2

使用go脚本**yay**在AUR仓库中安装

注意:不要给yay **sudo权限**,这是被**禁止**的

安装python3

```terminal
yay -S python3
```

安装pip

```terminal
yay -S python-pip
```

## 检验安装是否成功

python3

```terminal
> python3 -v
import _frozen_importlib # frozen
import _imp # builtin
import '_thread' # <class '_frozen_importlib.BuiltinImporter'>
import '_warnings' # <class '_frozen_importlib.BuiltinImporter'>
import '_weakref' # <class '_frozen_importlib.BuiltinImporter'>
import '_io' # <class '_frozen_importlib.BuiltinImporter'>
import 'marshal' # <class '_frozen_importlib.BuiltinImporter'>
import 'posix' # <class '_frozen_importlib.BuiltinImporter'>
import '_frozen_importlib_external' # <class '_frozen_importlib.FrozenImporter'>
# installing zipimport hook
import 'time' # <class '_frozen_importlib.BuiltinImporter'>
import 'zipimport' # <class '_frozen_importlib.FrozenImporter'>
# installed zipimport hook
# /usr/lib/python3.9/encodings/__pycache__/__init__.cpython-39.pyc matches /usr/lib/python3.9/encodings/__init__.py
# code object from '/usr/lib/python3.9/encodings/__pycache__/__init__.cpython-39.pyc'
# /usr/lib/python3.9/__pycache__/codecs.cpython-39.pyc matches /usr/lib/python3.9/codecs.py
# code object from '/usr/lib/python3.9/__pycache__/codecs.cpython-39.pyc'
import '_codecs' # <class '_frozen_importlib.BuiltinImporter'>
import 'codecs' # <_frozen_importlib_external.SourceFileLoader object at 0x7f61746e5fa0>
# /usr/lib/python3.9/encodings/__pycache__/aliases.cpython-39.pyc matches /usr/lib/python3.9/encodings/aliases.py
# code object from '/usr/lib/python3.9/encodings/__pycache__/aliases.cpython-39.pyc'
import 'encodings.aliases' # <_frozen_importlib_external.SourceFileLoader object at 0x7f617468b640>
import 'encodings' # <_frozen_importlib_external.SourceFileLoader object at 0x7f61746e5dc0>
# /usr/lib/python3.9/encodings/__pycache__/utf_8.cpython-39.pyc matches /usr/lib/python3.9/encodings/utf_8.py
# code object from '/usr/lib/python3.9/encodings/__pycache__/utf_8.cpython-39.pyc'
import 'encodings.utf_8' # <_frozen_importlib_external.SourceFileLoader object at 0x7f61746e5d60>
import '_signal' # <class '_frozen_importlib.BuiltinImporter'>
# /usr/lib/python3.9/encodings/__pycache__/latin_1.cpython-39.pyc matches /usr/lib/python3.9/encodings/latin_1.py
# code object from '/usr/lib/python3.9/encodings/__pycache__/latin_1.cpython-39.pyc'
import 'encodings.latin_1' # <_frozen_importlib_external.SourceFileLoader object at 0x7f617468b730>
# /usr/lib/python3.9/__pycache__/io.cpython-39.pyc matches /usr/lib/python3.9/io.py
# code object from '/usr/lib/python3.9/__pycache__/io.cpython-39.pyc'
# /usr/lib/python3.9/__pycache__/abc.cpython-39.pyc matches /usr/lib/python3.9/abc.py
# code object from '/usr/lib/python3.9/__pycache__/abc.cpython-39.pyc'
import '_abc' # <class '_frozen_importlib.BuiltinImporter'>
import 'abc' # <_frozen_importlib_external.SourceFileLoader object at 0x7f617468bbe0>
import 'io' # <_frozen_importlib_external.SourceFileLoader object at 0x7f617468b910>
# /usr/lib/python3.9/__pycache__/site.cpython-39.pyc matches /usr/lib/python3.9/site.py
# code object from '/usr/lib/python3.9/__pycache__/site.cpython-39.pyc'
# /usr/lib/python3.9/__pycache__/os.cpython-39.pyc matches /usr/lib/python3.9/os.py
# code object from '/usr/lib/python3.9/__pycache__/os.cpython-39.pyc'
# /usr/lib/python3.9/__pycache__/stat.cpython-39.pyc matches /usr/lib/python3.9/stat.py
# code object from '/usr/lib/python3.9/__pycache__/stat.cpython-39.pyc'
import '_stat' # <class '_frozen_importlib.BuiltinImporter'>
import 'stat' # <_frozen_importlib_external.SourceFileLoader object at 0x7f6174642490>
# /usr/lib/python3.9/__pycache__/_collections_abc.cpython-39.pyc matches /usr/lib/python3.9/_collections_abc.py
# code object from '/usr/lib/python3.9/__pycache__/_collections_abc.cpython-39.pyc'
import '_collections_abc' # <_frozen_importlib_external.SourceFileLoader object at 0x7f6174642550>
# /usr/lib/python3.9/__pycache__/posixpath.cpython-39.pyc matches /usr/lib/python3.9/posixpath.py
# code object from '/usr/lib/python3.9/__pycache__/posixpath.cpython-39.pyc'
# /usr/lib/python3.9/__pycache__/genericpath.cpython-39.pyc matches /usr/lib/python3.9/genericpath.py
# code object from '/usr/lib/python3.9/__pycache__/genericpath.cpython-39.pyc'
import 'genericpath' # <_frozen_importlib_external.SourceFileLoader object at 0x7f6174667b50>
import 'posixpath' # <_frozen_importlib_external.SourceFileLoader object at 0x7f6174642ca0>
import 'os' # <_frozen_importlib_external.SourceFileLoader object at 0x7f61746a4b80>
# /usr/lib/python3.9/__pycache__/_sitebuiltins.cpython-39.pyc matches /usr/lib/python3.9/_sitebuiltins.py
# code object from '/usr/lib/python3.9/__pycache__/_sitebuiltins.cpython-39.pyc'
import '_sitebuiltins' # <_frozen_importlib_external.SourceFileLoader object at 0x7f617463bf70>
# /usr/lib/python3.9/__pycache__/_bootlocale.cpython-39.pyc matches /usr/lib/python3.9/_bootlocale.py
# code object from '/usr/lib/python3.9/__pycache__/_bootlocale.cpython-39.pyc'
import '_locale' # <class '_frozen_importlib.BuiltinImporter'>
import '_bootlocale' # <_frozen_importlib_external.SourceFileLoader object at 0x7f6174667f40>
import 'site' # <_frozen_importlib_external.SourceFileLoader object at 0x7f617468bc40>
Python 3.9.6 (default, Jun 30 2021, 10:22:16) 
[GCC 11.1.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
# extension module 'readline' loaded from '/usr/lib/python3.9/lib-dynload/readline.cpython-39-x86_64-linux-gnu.so'
# extension module 'readline' executed from '/usr/lib/python3.9/lib-dynload/readline.cpython-39-x86_64-linux-gnu.so'
import 'readline' # <_frozen_importlib_external.ExtensionFileLoader object at 0x7f61745ddee0>
import 'atexit' # <class '_frozen_importlib.BuiltinImporter'>
# /usr/lib/python3.9/__pycache__/rlcompleter.cpython-39.pyc matches /usr/lib/python3.9/rlcompleter.py
# code object from '/usr/lib/python3.9/__pycache__/rlcompleter.cpython-39.pyc'
import 'rlcompleter' # <_frozen_importlib_external.SourceFileLoader object at 0x7f61745ddd00>
>>> 
```

pip

```terminal
> pip list
Package        Version
-------------- -----------
appdirs        1.4.4
CacheControl   0.12.6
cffi           1.14.6
chardet        4.0.0
colorama       0.4.4
contextlib2    0.6.0.post1
cryptography   3.4.8
distlib        0.3.2
distro         1.5.0
html5lib       1.1
idna           3.2
more-itertools 8.8.0
msgpack        1.0.2
ordered-set    4.0.2
packaging      20.9
pep517         0.11.0
pip            20.3.4
ply            3.11
progress       1.5
psutil         5.8.0
pycparser      2.20
pymongo        3.12.0
pyOpenSSL      20.0.1
pyparsing      2.4.7
PyYAML         5.4.1
regex          2021.7.6
requests       2.26.0
resolvelib     0.5.5
retrying       1.3.3
SCons          4.2.0
setuptools     57.4.0
six            1.16.0
toml           0.10.2
tomli          1.2.1
urllib3        1.26.6
webencodings   0.5.1
```

