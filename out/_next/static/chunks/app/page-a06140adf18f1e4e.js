;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    2996: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 9798))
    },
    3623: (e, t, r) => {
      'use strict'
      r.d(t, { default: () => o })
      var n = r(5155),
        a = r(2115)
      let s = { x: 0, y: 0 }
      function o(e) {
        let { title: t } = e,
          [r, o] = (0, a.useState)(s),
          l = (0, a.useRef)(null),
          i = r.x + (r.y - 50) * 0.5,
          c = r.x + -((r.y - 50) * 1),
          d = {
            transition: 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)',
            clipPath: 'polygon(0 0, '
              .concat(i, '% 0, ')
              .concat(c, '% 100%, 0 100%)'),
            WebkitClipPath: 'polygon(0 0, '
              .concat(i, '% 0, ')
              .concat(c, '% 100%, 0 100%)'),
          }
        return (0, n.jsxs)('div', {
          className: 'cursor-pointer relative text-4xl md:text-6xl',
          onMouseMove: (e) => {
            if (!l.current) return
            let t = l.current.clientWidth,
              r = l.current.clientHeight
            o({
              x: (e.nativeEvent.offsetX / t) * 100,
              y: (e.nativeEvent.offsetY / r) * 100,
            })
          },
          onMouseOut: () => {
            o(s)
          },
          ref: l,
          children: [
            (0, n.jsx)('div', {
              className: 'text-secondary',
              children: (0, n.jsx)('h1', { children: t }),
            }),
            (0, n.jsx)('div', {
              className: 'absolute top-0 left-0 w-full h-full text-accent',
              style: d,
              children: (0, n.jsx)('h1', { children: t }),
            }),
          ],
        })
      }
    },
    3999: (e, t, r) => {
      'use strict'
      r.d(t, { cn: () => s })
      var n = r(2596),
        a = r(9688)
      function s() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r]
        return (0, a.QP)((0, n.$)(t))
      }
    },
    7168: (e, t, r) => {
      'use strict'
      r.d(t, { $: () => i })
      var n = r(5155)
      r(2115)
      var a = r(9708),
        s = r(2085),
        o = r(3999)
      let l = (0, s.F)(
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
      function i(e) {
        let { className: t, variant: r, size: s, asChild: i = !1, ...c } = e,
          d = i ? a.DX : 'button'
        return (0, n.jsx)(d, {
          'data-slot': 'button',
          className: (0, o.cn)(l({ variant: r, size: s, className: t })),
          ...c,
        })
      }
    },
    9798: (e, t, r) => {
      'use strict'
      r.d(t, { default: () => J })
      var n = r(5155),
        a = r(2115),
        s = r(7168),
        o = r(5452),
        l = r(4416),
        i = r(3999)
      function c(e) {
        let { ...t } = e
        return (0, n.jsx)(o.bL, { 'data-slot': 'dialog', ...t })
      }
      function d(e) {
        let { ...t } = e
        return (0, n.jsx)(o.l9, { 'data-slot': 'dialog-trigger', ...t })
      }
      function u(e) {
        let { ...t } = e
        return (0, n.jsx)(o.ZL, { 'data-slot': 'dialog-portal', ...t })
      }
      function f(e) {
        let { className: t, ...r } = e
        return (0, n.jsx)(o.hJ, {
          'data-slot': 'dialog-overlay',
          className: (0, i.cn)(
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
            t
          ),
          ...r,
        })
      }
      function h(e) {
        let { className: t, children: r, ...a } = e
        return (0, n.jsxs)(u, {
          'data-slot': 'dialog-portal',
          children: [
            (0, n.jsx)(f, {}),
            (0, n.jsxs)(o.UC, {
              'data-slot': 'dialog-content',
              className: (0, i.cn)(
                'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',
                t
              ),
              ...a,
              children: [
                r,
                (0, n.jsxs)(o.bm, {
                  className:
                    "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                  children: [
                    (0, n.jsx)(l.A, {}),
                    (0, n.jsx)('span', {
                      className: 'sr-only',
                      children: 'Close',
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
      function m(e) {
        let { className: t, ...r } = e
        return (0, n.jsx)('div', {
          'data-slot': 'dialog-header',
          className: (0, i.cn)(
            'flex flex-col gap-2 text-center sm:text-left',
            t
          ),
          ...r,
        })
      }
      function x(e) {
        let { className: t, ...r } = e
        return (0, n.jsx)('div', {
          'data-slot': 'dialog-footer',
          className: (0, i.cn)(
            'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
            t
          ),
          ...r,
        })
      }
      function g(e) {
        let { className: t, ...r } = e
        return (0, n.jsx)(o.hE, {
          'data-slot': 'dialog-title',
          className: (0, i.cn)('text-lg leading-none font-semibold', t),
          ...r,
        })
      }
      let b = {
          a1: 0,
          a2: 0,
          a3: 0,
          a4: 0,
          b1: 0,
          b2: 0,
          b3: 0,
          b4: 0,
          c1: 0,
          c2: 0,
          c3: 0,
          c4: 0,
          d1: 0,
          d2: 0,
          d3: 0,
          d4: 0,
        },
        v = ['a', 'b', 'c', 'd'],
        p = [
          'a1',
          'a2',
          'a3',
          'a4',
          'b1',
          'b4',
          'c1',
          'c4',
          'd1',
          'd2',
          'd3',
          'd4',
        ],
        y = [
          ['a1', 'a2', 'a3', 'a4'],
          ['b1', 'b2', 'b3', 'b4'],
          ['c1', 'c2', 'c3', 'c4'],
          ['d1', 'd2', 'd3', 'd4'],
        ],
        j = [
          ['a1', 'b1', 'c1', 'd1'],
          ['a2', 'b2', 'c2', 'd2'],
          ['a3', 'b3', 'c3', 'd3'],
          ['a4', 'b4', 'c4', 'd4'],
        ],
        k = [
          ...Array.from({ length: 85 }, () => 2),
          ...Array.from({ length: 15 }, () => 4),
        ],
        w = (e) => {
          if (!e) return ''
          let t = Math.log2(e)
          return 'bg-tile'
            .concat(t, ' ')
            .concat(t > 6 ? 'text-xl' : 'text-2xl', ' ')
            .concat(t <= 2 ? 'text-tile-text' : 'text-white')
        }
      var N = (function (e) {
        return (
          (e.RIGHT = 'right'),
          (e.LEFT = 'left'),
          (e.UP = 'up'),
          (e.DOWN = 'down'),
          e
        )
      })({})
      let A = (e) => Math.floor(Math.random() * e)
      var E = (function (e) {
        return (e.EASY = 'easy'), (e.MEDIUM = 'medium'), (e.HARD = 'hard'), e
      })({})
      let C = {
          easy: [
            ...Array.from({ length: 20 }, () => 0),
            ...Array.from({ length: 20 }, () => 2),
            ...Array.from({ length: 20 }, () => 4),
            ...Array.from({ length: 10 }, () => 8),
            ...Array.from({ length: 5 }, () => 16),
            ...Array.from({ length: 5 }, () => 32),
            ...Array.from({ length: 5 }, () => 64),
            ...Array.from({ length: 5 }, () => 128),
            ...Array.from({ length: 5 }, () => 256),
            ...Array.from({ length: 5 }, () => 512),
          ],
          medium: [
            ...Array.from({ length: 10 }, () => 0),
            ...Array.from({ length: 10 }, () => 2),
            ...Array.from({ length: 10 }, () => 4),
            ...Array.from({ length: 10 }, () => 8),
            ...Array.from({ length: 10 }, () => 16),
            ...Array.from({ length: 10 }, () => 32),
            ...Array.from({ length: 10 }, () => 64),
            ...Array.from({ length: 10 }, () => 128),
            ...Array.from({ length: 10 }, () => 256),
            ...Array.from({ length: 10 }, () => 512),
          ],
          hard: [
            ...Array.from({ length: 5 }, () => 0),
            ...Array.from({ length: 5 }, () => 2),
            ...Array.from({ length: 5 }, () => 4),
            ...Array.from({ length: 5 }, () => 8),
            ...Array.from({ length: 10 }, () => 16),
            ...Array.from({ length: 10 }, () => 32),
            ...Array.from({ length: 15 }, () => 64),
            ...Array.from({ length: 15 }, () => 128),
            ...Array.from({ length: 15 }, () => 256),
            ...Array.from({ length: 12 }, () => 512),
            ...Array.from({ length: 3 }, () => 1024),
          ],
        },
        z = (e) => {
          let t = C[e]
          return v.reduce((e, r) => {
            for (let n = 0; n < 4; n++)
              e[''.concat(r).concat(n + 1)] = t[A(t.length - 1)]
            return e
          }, {})
        },
        S = (e) => Object.values(e).reduce((e, t) => e + t, 0),
        T = (e) => Math.floor(Math.random() * Math.floor(e)),
        O = (0, a.createContext)(null),
        L = (e) => {
          let { children: t } = e,
            [r, s] = (0, a.useState)(b),
            [o, l] = (0, a.useState)(null),
            [i, c] = (0, a.useState)(!1),
            [d, u] = (0, a.useState)(!1),
            [f, h] = (0, a.useState)(!1),
            [m, x] = (0, a.useState)(void 0),
            [g, v] = (0, a.useState)(!1),
            w = (0, a.useRef)(null),
            A = (0, a.useRef)(0)
          ;(0, a.useEffect)(() => {
            f && (s({ ...r, ...E() }), h(!1)),
              G() &&
                setTimeout(() => {
                  u(!0), c(!1)
                }, 500)
          }, [f, r])
          let E = () => {
              let e = p.filter((e) => !r[e])
              return { [e[T(e.length)]]: k[T(100)] }
            },
            C = (0, a.useCallback)(
              (e) => {
                let t
                if (i) {
                  switch (e.keyCode) {
                    case 37:
                      t = N.LEFT
                      break
                    case 38:
                      t = N.UP
                      break
                    case 39:
                      t = N.RIGHT
                      break
                    case 40:
                      t = N.DOWN
                      break
                    default:
                      return
                  }
                  t && Y(t)
                }
              },
              [i, r]
            ),
            L = (e) => {
              g && e.preventDefault()
            },
            M = (e) => {
              i &&
                (v(!0),
                w.current &&
                  (w.current.position = {
                    startX: e.changedTouches[0].screenX,
                    startY: e.changedTouches[0].screenY,
                  }))
            },
            P = (e) => {
              if (!i || !w.current || !w.current.position) return
              v(!1)
              let t = D(
                e.changedTouches[0].screenX,
                e.changedTouches[0].screenY
              )
              t && Y(t)
            }
          ;(0, a.useEffect)(() => {
            if ('undefined' != typeof document)
              return (
                document.addEventListener('keyup', C),
                () => document.removeEventListener('keyup', C)
              )
          }, [C]),
            (0, a.useEffect)(() => {
              var e, t
              return (
                null == (t = document) ||
                  null == (e = t.body) ||
                  e.addEventListener('touchmove', L, { passive: !1 }),
                () => {
                  var e, t
                  return null == (t = document) || null == (e = t.body)
                    ? void 0
                    : e.removeEventListener('touchmove', L)
                }
              )
            }, [g]),
            (0, a.useEffect)(() => {
              if (null !== w.current)
                return (
                  w.current &&
                    (w.current.addEventListener('touchstart', M, !1),
                    w.current.addEventListener('touchend', P, !1)),
                  () => {
                    w.current &&
                      (w.current.removeEventListener('touchstart', M, !1),
                      w.current.removeEventListener('touchend', P, !1))
                  }
                )
            }, [i])
          let _ = (e) => {
              let t = z(e)
              return G(t) ? _(e) : t
            },
            R = () => {
              let e = E(),
                t = E()
              return { ...e, ...t }
            },
            $ = () => {
              s(b), l(null), c(!1), u(!1), (A.current = 0)
            },
            D = (e, t) => {
              if (!w.current || !w.current.position) return
              let { startX: r, startY: n } = w.current.position,
                a = Math.abs(n - t),
                s = Math.abs(r - e)
              if (!(s < 5) || !(a < 5))
                if (a > s)
                  if (t < n) return N.UP
                  else return N.DOWN
                else if (e < r) return N.LEFT
                else return N.RIGHT
            },
            G = (e) => {
              let t = e || r
              return (
                !(
                  Object.keys(t).some((e) => !t[e]) ||
                  y.some((e) =>
                    e.some((r, n) => n < e.length - 1 && t[r] === t[e[n + 1]])
                  )
                ) &&
                !j.some((e) =>
                  e.some((r, n) => n < e.length - 1 && t[r] === t[e[n + 1]])
                )
              )
            },
            U = (e) => {
              let t = {}
              return (
                e.forEach((e) => {
                  let n = []
                  e.forEach((e) => n.push(r[e]))
                  let a = n.filter((e) => e),
                    s = a.length
                  if (s > 1) {
                    let e = !1
                    for (let t = 0; t < s - 1; t++)
                      !e && a[s - 1 - t] && a[s - 1 - t] === a[s - 2 - t]
                        ? ((e = !0),
                          (A.current = A.current + 2 * a[s - 1 - t]),
                          (a[s - 1 - t] = 2 * a[s - 1 - t]),
                          a.splice(s - 2 - t, 1))
                        : (e = !1)
                  }
                  a.some((e, t) => n[4 - a.length + t] !== e) &&
                    e.forEach((e, r) => {
                      let n = 4 - a.length
                      t[e] = r < n ? 0 : a[r - n]
                    })
                }),
                t
              )
            },
            H = (e) => {
              let t = {}
              return (
                e.forEach((e) => {
                  let n = []
                  e.forEach((e) => n.push(r[e]))
                  let a = n.filter((e) => e),
                    s = a.length
                  if (s > 1)
                    for (let e = 0; e < s - 1; e++)
                      a[e] &&
                        a[e] === a[e + 1] &&
                        ((A.current = A.current + 2 * a[e]),
                        (a[e] = 2 * a[e]),
                        a.splice(e + 1, 1))
                  a.some((e, t) => n[t] !== e) &&
                    e.forEach((e, r) => {
                      t[e] = a[r] || 0
                    })
                }),
                t
              )
            },
            I = () => H(y),
            W = () => H(j),
            F = () => U(y),
            X = () => U(j),
            Y = (e) => {
              let t = {}
              switch (e) {
                case N.RIGHT:
                  t = F()
                  break
                case N.LEFT:
                  t = I()
                  break
                case N.UP:
                  t = W()
                  break
                case N.DOWN:
                  t = X()
              }
              Object.values(t).length && (l({ ...r }), s({ ...r, ...t }), h(!0))
            },
            V = {
              gameState: r,
              previousGameState: o,
              gameOn: i,
              startGame: (e) => {
                if (i) return
                $(), x(e)
                let t = e ? _(e) : R()
                ;(A.current = S(t)), s(t), c(!0)
              },
              gameOver: d,
              setGameOver: u,
              resetGame: $,
              canvasRef: w,
              gameLevel: m,
              score: A.current,
              handleMove: Y,
            }
          return (0, n.jsx)(O.Provider, { value: V, children: t })
        },
        M = () => {
          let e = (0, a.useContext)(O)
          if (!e)
            throw Error('useGameContext must be used within a GameProvider')
          return e
        }
      function P() {
        let { gameOver: e, resetGame: t, startGame: r, gameLevel: a } = M()
        return (0, n.jsx)(c, {
          open: e,
          onOpenChange: t,
          children: (0, n.jsxs)(h, {
            className: 'bg-background dark:bg-zinc-700 md:w-[400px]',
            children: [
              (0, n.jsx)(m, {
                className: 'flex flex-row items-center gap-4',
                children: (0, n.jsx)(g, { children: 'Game over' }),
              }),
              (0, n.jsxs)(x, {
                className: 'flex justify-center md:justify-end gap-4 pt-2',
                children: [
                  (0, n.jsx)(s.$, {
                    onClick: t,
                    variant: 'tertiary',
                    children: 'Reset',
                  }),
                  (0, n.jsx)(s.$, {
                    onClick: () => r(a),
                    variant: 'secondary',
                    children: 'Restart',
                  }),
                ],
              }),
            ],
          }),
        })
      }
      var _ = r(3623),
        R = r(463),
        $ = r(1386)
      function D(e) {
        let { ...t } = e
        return (0, n.jsx)($.bL, { 'data-slot': 'popover', ...t })
      }
      function G(e) {
        let { ...t } = e
        return (0, n.jsx)($.l9, { 'data-slot': 'popover-trigger', ...t })
      }
      function U(e) {
        let { className: t, align: r = 'center', sideOffset: a = 4, ...s } = e
        return (0, n.jsx)($.ZL, {
          children: (0, n.jsx)($.UC, {
            'data-slot': 'popover-content',
            align: r,
            sideOffset: a,
            className: (0, i.cn)(
              'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden',
              t
            ),
            ...s,
          }),
        })
      }
      function H() {
        let [e, t] = (0, a.useState)(!1)
        return (
          (0, a.useEffect)(() => {
            if (!localStorage.getItem('firstVisit')) {
              t(!0)
              let e = Date.now().toString()
              localStorage.setItem('firstVisit', e)
            }
          }, []),
          (0, n.jsxs)(D, {
            open: e,
            onOpenChange: t,
            children: [
              (0, n.jsx)(G, {
                asChild: !0,
                children: (0, n.jsx)(s.$, {
                  'aria-label': 'How to play',
                  variant: 'ghost',
                  children: (0, n.jsx)(R.A, {
                    className: 'text-inherit size-6',
                    size: 24,
                  }),
                }),
              }),
              (0, n.jsxs)(U, {
                className:
                  'bg-white dark:bg-zinc-800 p-4 rounded-md shadow-md w-72',
                children: [
                  (0, n.jsx)('h3', {
                    className:
                      'font-bold text-lg mb-2 text-zinc-900 dark:text-zinc-100',
                    children: 'How to Play',
                  }),
                  (0, n.jsxs)('div', {
                    className:
                      'space-y-2 text-zinc-700 dark:text-zinc-300 text-sm',
                    children: [
                      (0, n.jsxs)('p', {
                        children: [
                          (0, n.jsx)('strong', { children: 'Goal:' }),
                          ' Combine tiles to create the number 2048!',
                        ],
                      }),
                      (0, n.jsxs)('p', {
                        children: [
                          (0, n.jsx)('strong', { children: 'Controls:' }),
                          ' Use arrow keys (↑ ↓ ← →) to move all tiles. On mobile, swipe in any direction.',
                        ],
                      }),
                      (0, n.jsxs)('p', {
                        children: [
                          (0, n.jsx)('strong', { children: 'Merging:' }),
                          ' When two tiles with the same number touch, they merge into one with the sum of their values.',
                        ],
                      }),
                      (0, n.jsxs)('p', {
                        children: [
                          (0, n.jsx)('strong', { children: 'Trouble Mode:' }),
                          ' Adds obstacles! Choose difficulty level to change the number of obstacle tiles.',
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        )
      }
      function I() {
        let [e, t] = (0, a.useState)(!1),
          { gameOn: r, resetGame: o } = M()
        return (0, n.jsxs)(c, {
          open: e,
          onOpenChange: t,
          children: [
            (0, n.jsx)(d, {
              asChild: !0,
              children: (0, n.jsx)(s.$, {
                disabled: !r,
                variant: 'secondary',
                children: 'Reset Game',
              }),
            }),
            (0, n.jsxs)(h, {
              className: 'bg-background dark:bg-zinc-700 max-w-xs',
              children: [
                (0, n.jsx)(m, {
                  className: 'flex flex-row items-center gap-4',
                  children: (0, n.jsx)(g, {
                    children: 'Do you want to end the ongoing game?',
                  }),
                }),
                (0, n.jsxs)(x, {
                  className: 'flex justify-center md:justify-end gap-4',
                  children: [
                    (0, n.jsx)(s.$, {
                      onClick: () => t(!1),
                      variant: 'tertiary',
                      children: 'Cancel',
                    }),
                    (0, n.jsx)(s.$, {
                      onClick: () => {
                        t(!1), o()
                      },
                      variant: 'secondary',
                      children: 'Ok',
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
      function W() {
        let [e, t] = (0, a.useState)(!1),
          { startGame: r, gameOn: o } = M(),
          l = (e) => {
            t(!1), r(e)
          }
        return (0, n.jsxs)(D, {
          open: e,
          onOpenChange: t,
          children: [
            (0, n.jsx)(G, {
              asChild: !0,
              children: (0, n.jsx)(s.$, {
                'aria-label': 'Start with Trouble',
                disabled: o,
                variant: 'secondary',
                children: 'Trouble',
              }),
            }),
            (0, n.jsx)(U, {
              className: 'bg-background w-full',
              children: (0, n.jsx)('div', {
                className: 'flex flex-col gap-2',
                children: Object.values(E).map((e) =>
                  (0, n.jsx)(
                    s.$,
                    {
                      onClick: () => l(e),
                      variant: 'tertiary',
                      role: 'menuitem',
                      children:
                        e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(),
                    },
                    e
                  )
                ),
              }),
            }),
          ],
        })
      }
      function F() {
        let { gameOn: e, startGame: t } = M()
        return (0, n.jsx)('div', {
          className: 'self-center flex justify-center items-center',
          children: (0, n.jsx)('div', {
            className: 'self-center md:self-start',
            children: (0, n.jsxs)('div', {
              className: 'flex flex-col flex-end justify-center space-y-3',
              children: [
                (0, n.jsx)(s.$, {
                  onClick: () => t(),
                  disabled: e,
                  variant: 'secondary',
                  children: 'Normal',
                }),
                (0, n.jsx)(W, {}),
                (0, n.jsx)(I, {}),
              ],
            }),
          }),
        })
      }
      function X() {
        let [e, t] = (0, a.useState)(new Set()),
          { canvasRef: r, gameState: s, previousGameState: o, gameOn: l } = M()
        return (
          (0, a.useEffect)(() => {
            if (!o || !l) return
            let e = new Set()
            for (let t = 0; t < 4; t++)
              for (let r = 0; r < 4; r++) {
                let n = v[t] + (r + 1)
                if (s[n] && (!o[n] || s[n] !== o[n])) {
                  let t = !1
                  for (let e in o)
                    if (o[e] === s[n]) {
                      t = !0
                      break
                    }
                  t || e.add(n)
                }
              }
            e.size > 0 &&
              (t(e),
              setTimeout(() => {
                t(new Set())
              }, 200))
          }, [s, o, l]),
          (0, n.jsx)('div', {
            className: 'self-center flex justify-center items-center',
            ref: r,
            children: (0, n.jsx)('div', {
              className:
                'border-neutral-200 dark:border-stone-600 border-4 self-end relative',
              style: { width: '16rem' },
              children: Array.from({ length: 4 }).map((t, r) =>
                (0, n.jsx)(
                  'div',
                  {
                    className: (0, i.cn)(
                      {
                        'border-b-4 border-neutral-200 dark:border-stone-600':
                          r < 3,
                      },
                      'flex flex-row'
                    ),
                    children: Array.from({ length: 4 }).map((t, a) => {
                      let o = v[r] + (a + 1),
                        l = e.has(o)
                      return (0, n.jsx)(
                        'div',
                        {
                          className: (0, i.cn)(
                            'transition w-16 h-16 flex box-content dark:transition-none',
                            w(s[o]),
                            {
                              'border-r-4 border-neutral-200 dark:border-stone-600':
                                a < 3,
                            },
                            s[o] ? 'game-tile' : '',
                            l ? 'game-tile-new' : ''
                          ),
                          'data-position': o,
                          'data-value': s[o] || '',
                          children: (0, n.jsx)('span', {
                            className:
                              'font-bold w-full self-center text-center',
                            children: s[o] || '',
                          }),
                        },
                        a
                      )
                    }),
                  },
                  r
                )
              ),
            }),
          })
        )
      }
      var Y = r(760),
        V = r(5561)
      function Z() {
        let { score: e } = M(),
          [t, r] = (0, a.useState)(e),
          [s, o] = (0, a.useState)(!1),
          [l, i] = (0, a.useState)(0)
        return (
          (0, a.useEffect)(() => {
            let n = e - t
            if (n > 0) {
              i(n), r(e), o(!0)
              let t = setTimeout(() => {
                o(!1)
              }, 500)
              return () => clearTimeout(t)
            }
          }, [e]),
          (0, n.jsxs)('div', {
            className: 'relative h-16 flex items-center justify-center',
            children: [
              (0, n.jsx)('div', {
                className:
                  'text-secondary dark:text-amber-200  text-3xl md:text-6xl leading-normal font-bold text-center',
                children: (0, n.jsx)(Y.N, {
                  children: (0, n.jsx)(
                    V.P.div,
                    {
                      initial: { opacity: 1, scale: 1 },
                      animate: {
                        opacity: 1,
                        scale: s ? [1, 1.2, 1] : 1,
                        color: s ? ['#818cf8', '#f59e0b', '#818cf8'] : void 0,
                      },
                      transition: { duration: 0.5 },
                      children: e || null,
                    },
                    e
                  ),
                }),
              }),
              (0, n.jsx)(Y.N, {
                children:
                  s &&
                  (0, n.jsxs)(V.P.div, {
                    className:
                      'absolute -top-10 text-accent font-bold text-lg md:text-2xl',
                    initial: { opacity: 0, y: 0 },
                    animate: { opacity: 1, y: -10 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.5 },
                    children: ['+', l],
                  }),
              }),
            ],
          })
        )
      }
      function J() {
        return (0, n.jsxs)('div', {
          className:
            'px-4 md:px-6 py-8 bg-background dark:bg-zinc-700 w-screen min-h-screen h-screen flex flex-col',
          children: [
            (0, n.jsxs)('div', {
              className:
                'relative justify-between mt-6 md:mt-0 mb-6 items-center',
              children: [
                (0, n.jsx)(_.default, { title: '2048Trouble' }),
                (0, n.jsx)('div', {
                  className: 'absolute top-0 md:top-3 right-0',
                  children: (0, n.jsx)(H, {}),
                }),
              ],
            }),
            (0, n.jsxs)(L, {
              children: [
                (0, n.jsxs)('div', {
                  className:
                    'flex flex-col justify-center flex-grow space-y-4 md:space-y-6',
                  children: [
                    (0, n.jsx)(Z, {}),
                    (0, n.jsx)(X, {}),
                    (0, n.jsx)(F, {}),
                  ],
                }),
                (0, n.jsx)(P, {}),
              ],
            }),
          ],
        })
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t))
    e.O(0, [352, 657, 441, 684, 358], () => t(2996)), (_N_E = e.O())
  },
])
