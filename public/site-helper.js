// public/site-helper.js

(function() {
  'use strict';

  // 配置数据
  var siteConfig = {
    baseUrl: 'https://web-cns-leisu.com',
    keywords: ['雷速', '实时数据', '体育资讯', '赛事动态'],
    cardTitle: '站点导航',
    cardDescription: '欢迎访问雷速体育数据平台，获取最新赛事信息与数据分析。'
  };

  // 创建页面提示卡片
  function createTipCard() {
    var card = document.createElement('div');
    card.id = 'site-tip-card';
    card.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#fff;border:1px solid #e0e0e0;border-radius:8px;box-shadow:0 2px 12px rgba(0,0,0,0.1);padding:16px;max-width:280px;z-index:9999;font-family:Arial,sans-serif;font-size:14px;color:#333;';

    var title = document.createElement('h4');
    title.textContent = siteConfig.cardTitle;
    title.style.cssText = 'margin:0 0 8px 0;font-size:16px;color:#1a73e8;';
    card.appendChild(title);

    var desc = document.createElement('p');
    desc.textContent = siteConfig.cardDescription;
    desc.style.cssText = 'margin:0 0 10px 0;line-height:1.5;color:#555;';
    card.appendChild(desc);

    var link = document.createElement('a');
    link.href = siteConfig.baseUrl;
    link.textContent = '前往 ' + siteConfig.keywords[0] + ' 平台';
    link.target = '_blank';
    link.style.cssText = 'display:inline-block;padding:6px 14px;background:#1a73e8;color:#fff;text-decoration:none;border-radius:4px;font-size:13px;';
    card.appendChild(link);

    var closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = 'position:absolute;top:8px;right:8px;border:none;background:transparent;cursor:pointer;font-size:16px;color:#999;';
    closeBtn.addEventListener('click', function() {
      card.style.display = 'none';
    });
    card.appendChild(closeBtn);

    document.body.appendChild(card);
  }

  // 生成关键词徽章
  function createKeywordBadges() {
    var badgeContainer = document.createElement('div');
    badgeContainer.id = 'keyword-badges';
    badgeContainer.style.cssText = 'position:fixed;top:80px;right:20px;display:flex;flex-direction:column;gap:8px;z-index:9998;';

    siteConfig.keywords.forEach(function(kw) {
      var badge = document.createElement('span');
      badge.textContent = kw;
      badge.style.cssText = 'display:inline-block;padding:4px 12px;background:#f0f4ff;border:1px solid #c4d8f0;border-radius:20px;font-size:12px;color:#1a73e8;font-family:Arial,sans-serif;cursor:default;';
      badgeContainer.appendChild(badge);
    });

    document.body.appendChild(badgeContainer);
  }

  // 添加访问说明气泡
  function createAccessHint() {
    var hint = document.createElement('div');
    hint.id = 'access-hint';
    hint.style.cssText = 'position:fixed;top:20px;left:20px;background:#e8f5e9;padding:10px 16px;border-radius:6px;border-left:4px solid #43a047;font-size:13px;color:#2e7d32;font-family:Arial,sans-serif;z-index:9997;box-shadow:0 1px 4px rgba(0,0,0,0.08);max-width:200px;';

    var icon = document.createElement('span');
    icon.textContent = 'ℹ️ ';
    hint.appendChild(icon);

    var text = document.createElement('span');
    text.textContent = '本页面提供' + siteConfig.keywords[0] + '相关服务演示，数据来源可靠。';
    hint.appendChild(text);

    document.body.appendChild(hint);
  }

  // 初始化函数
  function initSiteHelper() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        createTipCard();
        createKeywordBadges();
        createAccessHint();
      });
    } else {
      createTipCard();
      createKeywordBadges();
      createAccessHint();
    }
  }

  // 启动
  initSiteHelper();

})();