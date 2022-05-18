<script>
  (function () {
    const LOCALHOST_URL = [
      'http://localhost:3000/@vite/client',
      'http://localhost:3000/src/main.js',
    ]
    const PROD_URL = ['https://MY-PROJECT.netlify.app/main.js']

    function createScripts(arr, isDevMode) {
      return arr.map(function (url) {
        const s = document.createElement('script')
        s.src = url

        if (isDevMode) {
          s.type = 'module'
        }

        return s
      })
    }

    function insertScript(scriptArr) {
      scriptArr.forEach(function (script) {
        document.body.appendChild(script)
      })
    }

    const localhostScripts = createScripts(LOCALHOST_URL, true)
    const prodScripts = createScripts(PROD_URL, false)

    let choosedScripts = null

    fetch(LOCALHOST_URL[0], {})
      .then(() => {
        choosedScripts = localhostScripts
      })
      .catch((e) => {
        choosedScripts = prodScripts
        console.error(e)
      })
      .finally(() => {
        if (choosedScripts) {
          insertScript(choosedScripts)

          return
        }

        console.error('something went wrong, no scripts loaded')
      })
  })()
</script>
