<h1 align="center">☕ scamBlock-Extension</h1>
<p align="center">네이버 카페 `중고나라`의 이용에 도움을 주는 확장 기능입니다.</p>
<h3 align="center">🙋‍♂️ Maintained by <a href="https://github.com/Curo-Dev">@Curo-Dev</a></h3>
<h3 align="center">🙇‍♀️ Support by <a href="https://github.com/BasixKOR">@BasixKOR</a></h3>


## 기능

- 사용자 지정 차단

## 브라우저 지원

| [![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](/) | [![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](/) | [![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png)](/) | [![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](/) | [![Yandex](https://raw.github.com/alrra/browser-logos/master/src/yandex/yandex_48x48.png)](/) | [![Brave](https://raw.github.com/alrra/browser-logos/master/src/brave/brave_48x48.png)](/) | [![vivaldi](https://raw.github.com/alrra/browser-logos/master/src/vivaldi/vivaldi_48x48.png)](/) |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 49 & later ✔                                                                                  | 52 & later ✔                                                                                     | 36 & later ✔                                                                               | 79 & later ✔                                                                            | Latest ✔                                                                                      | Latest ✔                                                                                   | Latest ✔                                                                                         |


### 개발 환경

- `yarn install` to install dependencies.
- To watch file changes in developement

  - Chrome
    - `yarn run dev:chrome`
  - Firefox
    - `yarn run dev:firefox`
  - Opera
    - `yarn run dev:opera`

  (Reload Extension Manually in the browser)

- **Load extension in browser**

  - ### Chrome

    - Go to the browser address bar and type `chrome://extensions`
    - Check the `Developer Mode` button to enable it.
    - Click on the `Load Unpacked Extension…` button.
    - Select your extension’s extracted directory.

  - ### Firefox

    - Load the Add-on via `about:debugging` as temporary Add-on.
    - Choose the `manifest.json` file in the extracted directory

  - ### Opera

    - Load the extension via `opera:extensions`
    - Check the `Developer Mode` and load as unpacked from extension’s extracted directory.

### Production

- `yarn run build` builds the extension for all the browsers to `extension/BROWSER` directory respectively.

## 도움이 되셨나요?

이 프로젝트가 여러분에게 도움이 되었다면, `⭐️ Star` 를 눌러주세요!

## 라이선스

해당 프로젝트는 `MIT License`로 배포됩니다. [📃 LICENSE](https://github.com/team-octa/scamBlock-Extension/blob/master/LICENCE)

### Thanks to

- [web-extension-starter](https://github.com/abhijithvijayan/web-extension-starter) (MIT License)
