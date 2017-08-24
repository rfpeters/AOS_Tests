Wait 2
Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link")_;_script infofile_;_ZIP::ssf1.xml_;_
Wait 2
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set "testaccount" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Password").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Password")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").SetSecure "598baa15881e77a33810e2a3aeebc8b97841d368f0a0f6d7"
var_Exist = Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btn").Exist @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign in btn")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btn").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password")_;_script infofile_;_ZIP::ssf5.xml_;_

Wait 2
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("testaccount").Check CheckPoint("testaccount") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("testaccount")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link_2").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link 2")_;_script infofile_;_ZIP::ssf8.xml_;_
