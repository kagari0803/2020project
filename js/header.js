
header ='<!--導覽列-->\
<nav class="navbar navbar-expand-sm navbar-light main-nav" style="background-color:#2B2B2B;">\
    <div class="container">\
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".nav-content" aria-expanded="false" aria-label="Toggle navigation">\
          <span class="navbar-toggler-icon" style="background-color:white;"></span>\
      </button>\
      <a class="navbar-brand icon3small"  href="homepage.html" style="color:white;">\
        MOSHI BAKING SUPPLIES\
      </a>\
        <div class="navbar-collapse collapse nav-content order-2">\
            <ul class="nav navbar-nav">\
                <li class="nav-item active">\
                  <a class="nav-link " href="new.html" style="color:white;">NEW</a>\
                </li>\
                <li class="nav-item">\
                    <a class="nav-link" href="hot.html" style="color:white;">HOT</a>\
                </li>\
                <li class="nav-item">\
                <!--All的連結選單-->\
                  <div class="dropdown">\
                  <!--這裡a改成在button的外面-->\
                      <a class="nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color:white;">All ↯</a>\
                      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">\
                        <a href="sale.html"><button class="dropdown-item">SALE</button></a>\
                        <a href="appliance.html"><button class="dropdown-item">用具</button></a>\
                        <a href="model.html"><button class="dropdown-item">模型</button></a>\
                        <a href="recipe.html"><button class="dropdown-item">食譜</button></a>\
                      </div>\
                    </div>\
                </li>\
            </ul>\
        </div>\
        <ul class="nav navbar-nav text-nowrap flex-row mx-md-auto order-1 order-md-2">\
            <li class="nav-item"><a class="navbar-brand icon3big" href="homepage.html">\
             <img src="img/logo.png" width="20%" height="auto" style="margin-right:70px;">\
             </a></li>\
        </ul>\
        <div class="navbar-collapse collapse nav-content order-3 order-md-3">\
            <ul class="ml-auto nav navbar-nav">\
              <li>\
              <!--隱藏的搜尋欄-->\
              <div id="demo" class="collapse in">\
                <form class="form-inline" action="/action_page.php">\
                  <input class="form-control" type="text" placeholder="Search" style="max-width:100px;">\
                  <button class="btn btn-outline-light" type="submit">GO!</button>\
                </form>\
              </div>\
              </li>\
                <li class="nav-item">\
                  <a href="#" class="icon3big" data-toggle="collapse" data-target="#demo">\
                    <i class="fas fa-search fa-lg" style="color:white;margin-right:5px;"></i></a>\
                </li>\
                <li class="nav-item">\
                    <a href="login.html" class="icon3big" alt="會員頁"><i class="fas fa-user-circle fa-lg" style="color:white;margin-right:5px;"></i></a>\
                </li>\
                <li class="nav-item">\
                    <a href="cart.html" class="icon3big" alt="購物車"><i class="fas fa-cart-arrow-down fa-lg"  style="color:white;"></i></a>\
                </li>\
                <li class="nav-item icon3small">\
                <!--手機板畫面的會員,購物車,製作團隊連結-->\
                <!--a增加class-->\
                  <div class="nav-link">\
                    <a href="login.html" class="link">會員</a>　/　\
                    <a href="cart.html" class="link">購物車</a>　/　\
                    <a href="us.html" class="link">製作團隊</a>\
                  </div>\
                </li>\
            </ul>\
        </div>\
    </div>\
</nav>';

document.write(header);
