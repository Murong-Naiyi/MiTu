import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c as d,b as l,d as e,e as o,w as s,a}from"./app-c015fac5.js";const h={},u=a('<p>::: center 韶光计划：柒柒 :::</p><h3 id="它是什么" tabindex="-1"><a class="header-anchor" href="#它是什么" aria-hidden="true">#</a> 它是什么？</h3><p>柒柒 是为 Android Shell/Windows 终端(Android Debug Bridge) 编写的可以使用指令来显示 Toast/通知/常驻通知 的应用</p><h3 id="环境需求" tabindex="-1"><a class="header-anchor" href="#环境需求" aria-hidden="true">#</a> 环境需求</h3><ul><li>安卓4及以上</li><li>Root或者Shell权限</li></ul><h3 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用？</h3><h5 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h5><h5 id="android-shell" tabindex="-1"><a class="header-anchor" href="#android-shell" aria-hidden="true">#</a> Android Shell：</h5><ul><li><code>pm install APK路径</code> （注意，如果apk路径不在/data/local/tmp内可能会安装失败，请尽量解压到此目录内）</li></ul><h5 id="windows-终端" tabindex="-1"><a class="header-anchor" href="#windows-终端" aria-hidden="true">#</a> Windows 终端：</h5><ul><li><code>adb install APK路径</code></li></ul><h5 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h5><h5 id="android-shell-1" tabindex="-1"><a class="header-anchor" href="#android-shell-1" aria-hidden="true">#</a> Android Shell：</h5><ul><li><code>am start -n yosunair.opensource.toast/SABZBCZGZZA.toast -e toast &quot;显示内容&quot;</code></li></ul><h5 id="windows-终端-1" tabindex="-1"><a class="header-anchor" href="#windows-终端-1" aria-hidden="true">#</a> Windows 终端：</h5><ul><li><code>adb shell am start -n yosunair.opensource.toast/SABZBCZGZZA.toast -e toast &quot;显示内容&quot;</code></li></ul><h5 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h5><h5 id="android-shell-2" tabindex="-1"><a class="header-anchor" href="#android-shell-2" aria-hidden="true">#</a> Android Shell：</h5><ul><li><code>pm uninstall yosunair.opensource.toast</code></li></ul><h5 id="windows-终端-2" tabindex="-1"><a class="header-anchor" href="#windows-终端-2" aria-hidden="true">#</a> Windows 终端：</h5><ul><li><code>adb uninstall yosunair.opensource.toast</code></li></ul><h4 id="小提示" tabindex="-1"><a class="header-anchor" href="#小提示" aria-hidden="true">#</a> 小提示</h4><p>你可以把它集成到 Magisk/KernelSU模块 或者 Windows Bat程序 里面，提供更好的服务 当初期版本发布的时候<a href="https://weishu.me/" target="_blank" rel="noopener noreferrer">维术</a>大佬评论说理论可以免安装使用，但是后面就没有再回复了，如果知道相关方法的请尽量反馈，以便于提升使用体验</p><h3 id="软件下载" tabindex="-1"><a class="header-anchor" href="#软件下载" aria-hidden="true">#</a> 软件下载</h3>',24),c=a(`<h3 id="从源构建" tabindex="-1"><a class="header-anchor" href="#从源构建" aria-hidden="true">#</a> 从源构建</h3><p>韶光：柒柒(编码SABZBCZGZZA)现已开源于<a href="https://github.com/Yosunair/Qiqi" target="_blank" rel="noopener noreferrer">GitHub.com</a>，你可以直接下载源码构建</p><div class="language-card line-numbers-mode" data-ext="card"><pre class="language-card"><code>title: 韶光：柒柒
desc: 为 Android Shell/Windows 终端(Android Debug Bridge) 编写的可以使用指令来显示 Toast/通知/常驻通知 的应用。
logo: https://github.githubassets.com/favicons/favicon.svg
link: https://github.com/Yosunair/Qiqi
color: rgba(253, 230, 138, 0.15)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="源码只提供显示toast的代码-请注意" tabindex="-1"><a class="header-anchor" href="#源码只提供显示toast的代码-请注意" aria-hidden="true">#</a> 源码只提供显示Toast的代码，请注意</h6><h4 id="环境需求-1" tabindex="-1"><a class="header-anchor" href="#环境需求-1" aria-hidden="true">#</a> 环境需求</h4><ul><li>一个软件的编译工具，例如 <a href="https://developer.android.google.cn/studio/" target="_blank" rel="noopener noreferrer">Android Studio</a> 或者 <a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener noreferrer">IntelliJ IDEA</a></li><li><a href="https://jdk.java.net/" target="_blank" rel="noopener noreferrer">Java</a> 17+</li><li><a href="https://flutter.cn/" target="_blank" rel="noopener noreferrer">Flutter</a> 3.0.0+</li><li>编译器<a href="https://flutter.cn/" target="_blank" rel="noopener noreferrer">Flutter</a>插件</li><li>编译器<a href="https://dart.cn/" target="_blank" rel="noopener noreferrer">Dart</a>插件</li><li>如果使用<a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener noreferrer">IntelliJ IDEA</a>，建议安装插件<a href="https://plugins.jetbrains.com/plugin/13710-chinese-simplified-language-pack----" target="_blank" rel="noopener noreferrer">Chinese ​(Simplified)​ Language Pack / 中文语言包</a></li></ul><h5 id="为什么要flutter" tabindex="-1"><a class="header-anchor" href="#为什么要flutter" aria-hidden="true">#</a> 为什么要<a href="https://flutter.cn/" target="_blank" rel="noopener noreferrer">Flutter</a>？</h5><p>因为本人的能力完全无法应对单独<a href="https://mirrors.cloud.tencent.com/gradle/" target="_blank" rel="noopener noreferrer">Gradle</a>编译时遇到的各种错误，故选择<a href="https://flutter.cn/" target="_blank" rel="noopener noreferrer">Flutter</a>进行构建，不过不用担心，我已经将源码中构建<a href="https://flutter.cn/" target="_blank" rel="noopener noreferrer">Flutter</a>的代码全部注释掉了，构建后的代码完全不会包含<a href="https://flutter.cn/" target="_blank" rel="noopener noreferrer">Flutter</a>的任何内容(除了强制要求的meta-data标签flutterEmbedding外)</p><p>::: warning 注意 本项目构建实测百分百报错(可能是因为不会构建flutter apk)，但是构建完成后还是会正常生成apk文件，不必担心 代码内容：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>flutter.bat --no-color build apk
Flutter assets will be downloaded from https://storage.flutter-io.cn. Make sure you trust this source!

Running Gradle task &#39;assembleRelease&#39;...                        
XmlClassGuard version is 1.2.4, agpVersion=8.2.0-alpha11
Running Gradle task &#39;assembleRelease&#39;...                           96.3s
Gradle build failed to produce an .apk file. It&#39;s likely that this file was generated under build, but the tool couldn&#39;t find it.
Process finished with exit code 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>apk在构建完成后会在 项目根目录/build/app/outputs/apk/release/app-release.apk :::</p><p>本项目使用了<a href="https://github.com/MegatronKing/StringFog" target="_blank" rel="noopener noreferrer">StringFog</a>和<a href="https://github.com/liujingxing/XmlClassGuard" target="_blank" rel="noopener noreferrer">XmlClassGuard</a>项目，虽然没有什么大的效果</p><p>::: danger 特别注意！ 本项目使用了<a href="https://github.com/Yosunair/Qiqi/blob/Yosunair/LICENSE" target="_blank" rel="noopener noreferrer">BSD 3-Clause &quot;New&quot; or &quot;Revised&quot; License</a>开源协议(因为国内环境较差，故选择这个较为宽松的协议)，如果你打算二次构建并且有作为一个人的良知的话，请做到以下两点</p><h6 id="_1、保留开源协议" tabindex="-1"><a class="header-anchor" href="#_1、保留开源协议" aria-hidden="true">#</a> 1、保留开源协议</h6><p>将开源协议保留在构建出的apk中的任意一个地方(除了放到res里面)(放到android/app/src/main/resources即可实现从apk根目录开始的任意位置)，你可以做一些你需要的修改，比如说将文件名“LICENSE”修改成“开源协议.txt”，或者将开源协议的内容修改成中文等</p><h6 id="_2、保留原作者标记" tabindex="-1"><a class="header-anchor" href="#_2、保留原作者标记" aria-hidden="true">#</a> 2、保留原作者标记</h6><p>你需要从sharedUserId、activity、meta-data、resources/skyx/code.txt中保留至少一个标记，保留sharedUserId为“yosunair.opensource”(不建议选择，如果安装多个相同sharedUserId的软件需要签名相同)，保留meta-data的name为“yosunair.skyx.code”，value为“SABZBCZGZZA”(软件编码)，保留activity的name为“SABZBCZGZZA.toast”</p><p>你还可以选择为显示toast的代码多出一个例如“skyx”的选项，让它在接收到“skyx”的时候显示出原作者的名称，执行示例如下 <code>am start -n yosunair.opensource.toast/SABZBCZGZZA.toast -e skyx</code>(Android Shell示例) 如果这样可以显示出原作者的名称，那么也是可以的，或者专门写一个活动来显示</p><h6 id="如果你不打算做到任何一项-那么我也是管不了你的-到底怎么做还是得看你自己的意愿" tabindex="-1"><a class="header-anchor" href="#如果你不打算做到任何一项-那么我也是管不了你的-到底怎么做还是得看你自己的意愿" aria-hidden="true">#</a> 如果你不打算做到任何一项，那么我也是管不了你的，到底怎么做还是得看你自己的意愿</h6><p>:::</p><h4 id="构建示例" tabindex="-1"><a class="header-anchor" href="#构建示例" aria-hidden="true">#</a> 构建示例</h4><h6 id="_1、下载源码" tabindex="-1"><a class="header-anchor" href="#_1、下载源码" aria-hidden="true">#</a> 1、下载源码</h6><p><code>git clone https://github.com/Yosunair/Qiqi.git</code></p><h6 id="_2、编译" tabindex="-1"><a class="header-anchor" href="#_2、编译" aria-hidden="true">#</a> 2、编译</h6><p>使用编译器打开此项目 依次点击 构建 -&gt; Flutter -&gt; Build APK</p><h6 id="_3、获取文件" tabindex="-1"><a class="header-anchor" href="#_3、获取文件" aria-hidden="true">#</a> 3、获取文件</h6><p>待到编译报错完成的时候，到/build/app/outputs/apk/release/app-release.apk获取编译后的文件</p><h6 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h6><p>项目使用的<a href="https://github.com/MegatronKing/StringFog" target="_blank" rel="noopener noreferrer">StringFog</a>插件会导致编译后还会有进程读取文件，你可以通过杀死Java进程或者移除插件来解决此问题 所有build.gradle文件里面的引入的依赖均采用“+”来自动使用最新版，如果不需要可以修改</p>`,29);function p(b,f){const r=t("RouterLink");return i(),d("div",null,[u,l("p",null,[e("请前往"),o(r,{to:"/file.html"},{default:s(()=>[e("下载中心")]),_:1}),e("下载最新版软件")]),c])}const k=n(h,[["render",p],["__file","index.html.vue"]]);export{k as default};
