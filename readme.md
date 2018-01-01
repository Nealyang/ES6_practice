## ES6 PARTICE

### let const

let const 存在块作用域的概念

必须先声明后使用，且不能重复声明

const 只能声明常量。这个常量对于引用型来说只是指针不能变。

### 解构赋值
左边一种结构，右边一种结构，左右一一对应，完成赋值。

分类：

数组解构赋值、对象解构赋值、字符串解构赋值、布尔值解构赋值、函数参数解构赋值、数值解构赋值

```javascript
{
    let a,b,reset;
    [a,b] = [1,2]
    console.log(a,b)
}
{
    let a,b,reset;
    [a,b,...reset] = [1,3,2,4,5,6];
    console.log(a,b,reset)
}
{
    let a,b;
    ({a,b} = {a:1,b:3});
    console.log(a,b)
}
{
    //如果未找到配对值，就是undefined，默认值就是为了解决这个问题的
    let a,b,c;
    ({a,b,c=3} = {a:1,b:3});
    console.log(a,b)
}
{
    // 变量交换or获取函数返回值
    let a = 1,b = 2;
    [a,b] = [b,a];
    console.log(a,b)
}
{
    //选择性接受想要的值
    function f() {
        return [1,2,3,4,5]
    }
    let a,b;
    [a,,...b] = f();
    console.log(a,b);
}
{
    //选择性接受想要的值
    function f() {
        return [1,2,3,4,5]
    }
    let a,b;
    [a,...b] = f();
    console.log(a,b);
}
{
    let o = {p:12,q:'ewe'};
    let {p,q,z = 2} = o;
    console.log(p,q,z);
}
{
    let metaData = {
        title:'abc',
        test:[{
            title:'test',
            desc:'description'
        }]
    }
    let {title:esTitle,test:[{title:cnTitle}]} = metaData
    console.log(esTitle,cnTitle)
}
```

### 正则表达式
```javascript
{
    // #构造函数#
    let regex = new RegExp('xyz', 'i'); //第一个参数是字符串，第二个是修饰符
    let regex2 = new RegExp(/xyz/i); //第一个参数是正则表达式，不接受第二个参数，否则会报错
    console.log(regex.test('xyz123'), regex2.test('xyz123'));
    console.log(regex.test('xyZ123'), regex2.test('xyZ123'));

    let regex3 = new RegExp(/abc/ig, 'i');
    console.log(regex3.flags); //原有正则对象的修饰符是ig，它会被第二个参数i覆盖

}

// 字符串对象的4个使用正则表达式的方法： match(),replace(),search(),split()这四个方法全部调用RegExp的实例的方法。

{
    let regex = new RegExp('xyz', 'ig');
    console.log(regex.test('xyz0XYZ1xyz2'), regex.exec('xyz0XYZ1xyz2'));
}

{
    // y修饰符
    let s = 'bbbb_bbb_bb_b';
    var a1 = /b+/g;
    var a2 = /b+/y;

    console.log(a1.exec(s), a2.exec(s)); // ["bbbb"],["bbbb"]
    console.log(a1.exec(s), a2.exec(s)); // ["bbb"],null

    console.log(a1.sticky, a2.sticky); //表示是否开启了粘连模式
}

{
    console.log('u修饰符',/^\uD83D/.test('\uD83D\uDC2A')); // true
    console.log('u修饰符',/^\uD83D/u.test('\uD83D\uDC2A')); // false
    // 大括号表示Unicode字符，只有加上u才能识别
    console.log(/\u{61}/.test('a')); // false
    console.log(/\u{61}/u.test('a')); // true
    console.log(/\u{20BB7}/u.test('𠮷')); // true
    // 点（.）字符不能识别码点大于0xFFFF的Unicode字符，必须加上u修饰符。
    let s = '𠮷';
    console.log('大于0xFFFF的Unicode字符',/^.$/.test(s)); // false
    console.log('使用u字符',/^.$/u.test(s)); // true

    // 使用u修饰符后，所有量词都会正确识别大于码点大于0xFFFF的Unicode字符。
    console.log('量词',/a{2}/.test('aa')); // true
    console.log('量词',/a{2}/u.test('aa')); // true
    console.log('量词',/𠮷{2}/.test('𠮷𠮷')); // false
    console.log('量词',/𠮷{2}/u.test('𠮷𠮷')); // true
}

{
    // #正则表达式中，点（.）是一个特殊字符，代表任意的单个字符，但是行终止符（line terminator character）除外
    // U+000A 换行符（\n）
    // U+000D 回车符（\r）
    // U+2028 行分隔符（line separator）
    // U+2029 段分隔符（paragraph separator）
    // 只是一个提案目前还不支持
    // let reg=/test.go/s;
    // console.log(reg.test('test\ngo'));
    // console.log(reg.test('test\ngo'));
    console.log('s变通方法',/foo.bar/.test('foo\nbar'));
    console.log('s变通方法',/foo[^]bar/.test('foo\nbar'));
}

```

### 字符串扩展
字符串中处理Unicode方法，遍历接口，模板字符串，新增方法（10个）

```javascript
{
  console.log('a',`\u0061`);
  console.log('s',`\u20BB7`);

  console.log('s',`\u{20BB7}`);


}


{
  let s='𠮷';
  console.log('length',s.length);
  console.log('0',s.charAt(0));
  console.log('1',s.charAt(1));
  console.log('at0',s.charCodeAt(0));
  console.log('at1',s.charCodeAt(1));

  let s1='𠮷a';
  console.log('length',s1.length);
  console.log('code0',s1.codePointAt(0));
  console.log('code0',s1.codePointAt(0).toString(16));
  console.log('code1',s1.codePointAt(1));
  console.log('code2',s1.codePointAt(2));
}

{
  console.log(String.fromCharCode("0x20bb7"));
  console.log(String.fromCodePoint("0x20bb7"));
}

{
  let str='\u{20bb7}abc';
  for(let i=0;i<str.length;i++){
    console.log('es5',str[i]);
  }
  for(let code of str){
    console.log('es6',code);
  }
}

{
  let str="string";
  console.log('includes',str.includes("c"));
  console.log('start',str.startsWith('str'));
  console.log('end',str.endsWith('ng'));
}

{
  let str="abc";
  console.log(str.repeat(2));
}

{
  let name="list";
  let info="hello world";
  let m=`i am ${name},${info}`;
  console.log(m);
}

{
  console.log('1'.padStart(2,'0'));
  console.log('1'.padEnd(2,'0'));
}

{
  let user={
    name:'list',
    info:'hello world'
  };
  console.log(abc`i am ${user.name},${user.info}`);
  function abc(s,v1,v2){
    console.log(s,v1,v2);
    return s+v1+v2
  }
}

{
  console.log(String.raw`Hi\n${1+2}`);
  console.log(`Hi\n${1+2}`);
}

```









