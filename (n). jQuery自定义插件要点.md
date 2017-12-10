
### 自定义插件

按照功能分类，jQuery插件的形式可以分为以下2类：

1. 局部性的，也就是基于某个jQuery DOM元素的，即 $(".xxx").yourPlugin()

2. 全局性的，即直接 $.yourFun() 调用的



#### 自定义插件开发要点

经过日积月累的插件开发经验，插件开发者们逐步约定俗成了一些基本要点，以解决各种因为不同插件导致的冲突、错误等问题，包括如下几点：

1. 插件名推荐使用 jQuery.插件名.js;

2. 局部性插件附加 jQuery.fn 对象上，全局性插件附加在 jQuery 上;

3. 插件内部，this 指向是当前的局部对象;

4. 可以通过 this.each 来遍历所有元素;

5. 所有的方法或插件，必须用分号结尾，避免出现问题；

6. 插件应该返回 jQuery 对象，以保证可链式连缀;

7. 避免插件内部直接使用$，如果要使用，请传递 jQuery 进去;

```
    //第7点的解释
    ;
    (function($){   // 自执行的匿名函数，形参$
        
        //your code
        
    })(jQuery);    // 实参jQuery  赋值形参$, 内部就可直接使用$表示jQuery了
    
    
    
    
    
    
    // 更有改进增强版
    ;
    (function($, window, document, undefined){  //形参
        
        //your code
        
    })(jQuery, window, document, undefined)  // 实参


```
































