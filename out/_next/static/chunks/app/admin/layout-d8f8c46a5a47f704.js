;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [581],
  {
    245: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 7998))
    },
    2664: (e, t, r) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'isLocalURL', {
          enumerable: !0,
          get: function () {
            return u
          },
        })
      let n = r(9991),
        o = r(7102)
      function u(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0
        try {
          let t = (0, n.getLocationOrigin)(),
            r = new URL(e, t)
          return r.origin === t && (0, o.hasBasePath)(r.pathname)
        } catch (e) {
          return !1
        }
      }
    },
    2757: (e, t, r) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
        })(t, {
          formatUrl: function () {
            return u
          },
          formatWithValidation: function () {
            return a
          },
          urlObjectKeys: function () {
            return i
          },
        })
      let n = r(6966)._(r(8859)),
        o = /https?|ftp|gopher|file/
      function u(e) {
        let { auth: t, hostname: r } = e,
          u = e.protocol || '',
          i = e.pathname || '',
          a = e.hash || '',
          s = e.query || '',
          c = !1
        ;(t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
          e.host
            ? (c = t + e.host)
            : r &&
              ((c = t + (~r.indexOf(':') ? '[' + r + ']' : r)),
              e.port && (c += ':' + e.port)),
          s && 'object' == typeof s && (s = String(n.urlQueryToSearchParams(s)))
        let l = e.search || (s && '?' + s) || ''
        return (
          u && !u.endsWith(':') && (u += ':'),
          e.slashes || ((!u || o.test(u)) && !1 !== c)
            ? ((c = '//' + (c || '')), i && '/' !== i[0] && (i = '/' + i))
            : c || (c = ''),
          a && '#' !== a[0] && (a = '#' + a),
          l && '?' !== l[0] && (l = '?' + l),
          '' +
            u +
            c +
            (i = i.replace(/[?#]/g, encodeURIComponent)) +
            (l = l.replace('#', '%23')) +
            a
        )
      }
      let i = [
        'auth',
        'hash',
        'host',
        'hostname',
        'href',
        'path',
        'pathname',
        'port',
        'protocol',
        'query',
        'search',
        'slashes',
      ]
      function a(e) {
        return u(e)
      }
    },
    3180: (e, t) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'errorOnce', {
          enumerable: !0,
          get: function () {
            return r
          },
        })
      let r = (e) => {}
    },
    3999: (e, t, r) => {
      'use strict'
      r.d(t, { cn: () => u })
      var n = r(2596),
        o = r(9688)
      function u() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r]
        return (0, o.QP)((0, n.$)(t))
      }
    },
    6654: (e, t, r) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'useMergedRef', {
          enumerable: !0,
          get: function () {
            return o
          },
        })
      let n = r(2115)
      function o(e, t) {
        let r = (0, n.useRef)(null),
          o = (0, n.useRef)(null)
        return (0, n.useCallback)(
          (n) => {
            if (null === n) {
              let e = r.current
              e && ((r.current = null), e())
              let t = o.current
              t && ((o.current = null), t())
            } else e && (r.current = u(e, n)), t && (o.current = u(t, n))
          },
          [e, t]
        )
      }
      function u(e, t) {
        if ('function' != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null
            }
          )
        {
          let r = e(t)
          return 'function' == typeof r ? r : () => e(null)
        }
      }
      ;('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default))
    },
    6874: (e, t, r) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
        })(t, {
          default: function () {
            return b
          },
          useLinkStatus: function () {
            return y
          },
        })
      let n = r(6966),
        o = r(5155),
        u = n._(r(2115)),
        i = r(2757),
        a = r(5227),
        s = r(9818),
        c = r(6654),
        l = r(9991),
        f = r(5929)
      r(3230)
      let d = r(4930),
        p = r(2664),
        h = r(6634)
      function g(e) {
        return 'string' == typeof e ? e : (0, i.formatUrl)(e)
      }
      function b(e) {
        let t,
          r,
          n,
          [i, b] = (0, u.useOptimistic)(d.IDLE_LINK_STATUS),
          y = (0, u.useRef)(null),
          {
            href: m,
            as: x,
            children: _,
            prefetch: P = null,
            passHref: j,
            replace: O,
            shallow: E,
            scroll: N,
            onClick: k,
            onMouseEnter: w,
            onTouchStart: T,
            legacyBehavior: C = !1,
            onNavigate: A,
            ref: S,
            unstable_dynamicOnHover: L,
            ...M
          } = e
        ;(t = _),
          C &&
            ('string' == typeof t || 'number' == typeof t) &&
            (t = (0, o.jsx)('a', { children: t }))
        let U = u.default.useContext(a.AppRouterContext),
          R = !1 !== P,
          I = null === P ? s.PrefetchKind.AUTO : s.PrefetchKind.FULL,
          { href: z, as: D } = u.default.useMemo(() => {
            let e = g(m)
            return { href: e, as: x ? g(x) : e }
          }, [m, x])
        C && (r = u.default.Children.only(t))
        let F = C ? r && 'object' == typeof r && r.ref : S,
          K = u.default.useCallback(
            (e) => (
              null !== U &&
                (y.current = (0, d.mountLinkInstance)(e, z, U, I, R, b)),
              () => {
                y.current &&
                  ((0, d.unmountLinkForCurrentNavigation)(y.current),
                  (y.current = null)),
                  (0, d.unmountPrefetchableInstance)(e)
              }
            ),
            [R, z, U, I, b]
          ),
          B = {
            ref: (0, c.useMergedRef)(K, F),
            onClick(e) {
              C || 'function' != typeof k || k(e),
                C &&
                  r.props &&
                  'function' == typeof r.props.onClick &&
                  r.props.onClick(e),
                U &&
                  (e.defaultPrevented ||
                    (function (e, t, r, n, o, i, a) {
                      let { nodeName: s } = e.currentTarget
                      if (
                        !(
                          ('A' === s.toUpperCase() &&
                            (function (e) {
                              let t = e.currentTarget.getAttribute('target')
                              return (
                                (t && '_self' !== t) ||
                                e.metaKey ||
                                e.ctrlKey ||
                                e.shiftKey ||
                                e.altKey ||
                                (e.nativeEvent && 2 === e.nativeEvent.which)
                              )
                            })(e)) ||
                          e.currentTarget.hasAttribute('download')
                        )
                      ) {
                        if (!(0, p.isLocalURL)(t)) {
                          o && (e.preventDefault(), location.replace(t))
                          return
                        }
                        e.preventDefault(),
                          u.default.startTransition(() => {
                            if (a) {
                              let e = !1
                              if (
                                (a({
                                  preventDefault: () => {
                                    e = !0
                                  },
                                }),
                                e)
                              )
                                return
                            }
                            ;(0, h.dispatchNavigateAction)(
                              r || t,
                              o ? 'replace' : 'push',
                              null == i || i,
                              n.current
                            )
                          })
                      }
                    })(e, z, D, y, O, N, A))
            },
            onMouseEnter(e) {
              C || 'function' != typeof w || w(e),
                C &&
                  r.props &&
                  'function' == typeof r.props.onMouseEnter &&
                  r.props.onMouseEnter(e),
                U && R && (0, d.onNavigationIntent)(e.currentTarget, !0 === L)
            },
            onTouchStart: function (e) {
              C || 'function' != typeof T || T(e),
                C &&
                  r.props &&
                  'function' == typeof r.props.onTouchStart &&
                  r.props.onTouchStart(e),
                U && R && (0, d.onNavigationIntent)(e.currentTarget, !0 === L)
            },
          }
        return (
          (0, l.isAbsoluteUrl)(D)
            ? (B.href = D)
            : (C && !j && ('a' !== r.type || 'href' in r.props)) ||
              (B.href = (0, f.addBasePath)(D)),
          (n = C
            ? u.default.cloneElement(r, B)
            : (0, o.jsx)('a', { ...M, ...B, children: t })),
          (0, o.jsx)(v.Provider, { value: i, children: n })
        )
      }
      r(3180)
      let v = (0, u.createContext)(d.IDLE_LINK_STATUS),
        y = () => (0, u.useContext)(v)
      ;('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default))
    },
    7168: (e, t, r) => {
      'use strict'
      r.d(t, { $: () => s })
      var n = r(5155)
      r(2115)
      var o = r(9708),
        u = r(2085),
        i = r(3999)
      let a = (0, u.F)(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        {
          variants: {
            variant: {
              default:
                'bg-primary text-primary-foreground shadow-xs hover:bg-primary/80',
              destructive:
                'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
              outline:
                'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
              secondary:
                'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/90',
              tertiary:
                'bg-tertiary text-tertiary-foreground shadow-xs hover:bg-tertiary/90',
              accent:
                'bg-accent text-accent-foreground shadow-xs hover:bg-accent/90',
              ghost:
                'hover:bg-secondary text-secondary hover:text-secondary-foreground dark:hover:bg-accent/50',
              link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
              default: 'h-9 px-4 py-2 has-[>svg]:px-3',
              sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
              lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
              icon: 'size-9',
            },
          },
          defaultVariants: { variant: 'default', size: 'default' },
        }
      )
      function s(e) {
        let { className: t, variant: r, size: u, asChild: s = !1, ...c } = e,
          l = s ? o.DX : 'button'
        return (0, n.jsx)(l, {
          'data-slot': 'button',
          className: (0, i.cn)(a({ variant: r, size: u, className: t })),
          ...c,
        })
      }
    },
    7998: (e, t, r) => {
      'use strict'
      r.r(t), r.d(t, { default: () => a })
      var n = r(5155)
      r(2115)
      var o = r(6874),
        u = r.n(o),
        i = r(7168)
      function a(e) {
        let { children: t } = e
        return (0, n.jsxs)('div', {
          className: 'min-h-screen bg-zinc-50 dark:bg-zinc-900',
          children: [
            (0, n.jsx)('header', {
              className: 'bg-rose-300 dark:bg-amber-700 p-4',
              children: (0, n.jsxs)('div', {
                className:
                  'container mx-auto flex justify-between items-center',
                children: [
                  (0, n.jsx)('h1', {
                    className: 'text-xl font-bold text-white',
                    children: '2048Trouble Admin',
                  }),
                  (0, n.jsx)(u(), {
                    href: '/',
                    children: (0, n.jsx)(i.$, {
                      variant: 'outline',
                      className: 'bg-white hover:bg-zinc-100',
                      children: 'Back to Game',
                    }),
                  }),
                ],
              }),
            }),
            (0, n.jsx)('main', {
              className: 'container mx-auto p-4',
              children: t,
            }),
          ],
        })
      }
    },
    8859: (e, t) => {
      'use strict'
      function r(e) {
        let t = {}
        for (let [r, n] of e.entries()) {
          let e = t[r]
          void 0 === e
            ? (t[r] = n)
            : Array.isArray(e)
              ? e.push(n)
              : (t[r] = [e, n])
        }
        return t
      }
      function n(e) {
        return 'string' == typeof e
          ? e
          : ('number' != typeof e || isNaN(e)) && 'boolean' != typeof e
            ? ''
            : String(e)
      }
      function o(e) {
        let t = new URLSearchParams()
        for (let [r, o] of Object.entries(e))
          if (Array.isArray(o)) for (let e of o) t.append(r, n(e))
          else t.set(r, n(o))
        return t
      }
      function u(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n]
        for (let t of r) {
          for (let r of t.keys()) e.delete(r)
          for (let [r, n] of t.entries()) e.append(r, n)
        }
        return e
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
        })(t, {
          assign: function () {
            return u
          },
          searchParamsToUrlQuery: function () {
            return r
          },
          urlQueryToSearchParams: function () {
            return o
          },
        })
    },
    9991: (e, t) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
        })(t, {
          DecodeError: function () {
            return h
          },
          MiddlewareNotFoundError: function () {
            return y
          },
          MissingStaticPage: function () {
            return v
          },
          NormalizeError: function () {
            return g
          },
          PageNotFoundError: function () {
            return b
          },
          SP: function () {
            return d
          },
          ST: function () {
            return p
          },
          WEB_VITALS: function () {
            return r
          },
          execOnce: function () {
            return n
          },
          getDisplayName: function () {
            return s
          },
          getLocationOrigin: function () {
            return i
          },
          getURL: function () {
            return a
          },
          isAbsoluteUrl: function () {
            return u
          },
          isResSent: function () {
            return c
          },
          loadGetInitialProps: function () {
            return f
          },
          normalizeRepeatedSlashes: function () {
            return l
          },
          stringifyError: function () {
            return m
          },
        })
      let r = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB']
      function n(e) {
        let t,
          r = !1
        return function () {
          for (var n = arguments.length, o = Array(n), u = 0; u < n; u++)
            o[u] = arguments[u]
          return r || ((r = !0), (t = e(...o))), t
        }
      }
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        u = (e) => o.test(e)
      function i() {
        let { protocol: e, hostname: t, port: r } = window.location
        return e + '//' + t + (r ? ':' + r : '')
      }
      function a() {
        let { href: e } = window.location,
          t = i()
        return e.substring(t.length)
      }
      function s(e) {
        return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown'
      }
      function c(e) {
        return e.finished || e.headersSent
      }
      function l(e) {
        let t = e.split('?')
        return (
          t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') +
          (t[1] ? '?' + t.slice(1).join('?') : '')
        )
      }
      async function f(e, t) {
        let r = t.res || (t.ctx && t.ctx.res)
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await f(t.Component, t.ctx) }
            : {}
        let n = await e.getInitialProps(t)
        if (r && c(r)) return n
        if (!n)
          throw Object.defineProperty(
            Error(
              '"' +
                s(e) +
                '.getInitialProps()" should resolve to an object. But found "' +
                n +
                '" instead.'
            ),
            '__NEXT_ERROR_CODE',
            { value: 'E394', enumerable: !1, configurable: !0 }
          )
        return n
      }
      let d = 'undefined' != typeof performance,
        p =
          d &&
          ['mark', 'measure', 'getEntriesByName'].every(
            (e) => 'function' == typeof performance[e]
          )
      class h extends Error {}
      class g extends Error {}
      class b extends Error {
        constructor(e) {
          super(),
            (this.code = 'ENOENT'),
            (this.name = 'PageNotFoundError'),
            (this.message = 'Cannot find module for page: ' + e)
        }
      }
      class v extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              'Failed to load static file for page: ' + e + ' ' + t)
        }
      }
      class y extends Error {
        constructor() {
          super(),
            (this.code = 'ENOENT'),
            (this.message = 'Cannot find the middleware module')
        }
      }
      function m(e) {
        return JSON.stringify({ message: e.message, stack: e.stack })
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t))
    e.O(0, [352, 441, 684, 358], () => t(245)), (_N_E = e.O())
  },
])
