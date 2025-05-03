;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [698],
  {
    3347: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 3623))
    },
    3623: (e, t, n) => {
      'use strict'
      n.d(t, { default: () => i })
      var l = n(5155),
        c = n(2115)
      let s = { x: 0, y: 0 }
      function i(e) {
        let { title: t } = e,
          [n, i] = (0, c.useState)(s),
          r = (0, c.useRef)(null),
          a = n.x + (n.y - 50) * 0.5,
          o = n.x + -((n.y - 50) * 1),
          u = {
            transition: 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)',
            clipPath: 'polygon(0 0, '
              .concat(a, '% 0, ')
              .concat(o, '% 100%, 0 100%)'),
            WebkitClipPath: 'polygon(0 0, '
              .concat(a, '% 0, ')
              .concat(o, '% 100%, 0 100%)'),
          }
        return (0, l.jsxs)('div', {
          className: 'cursor-pointer relative text-4xl md:text-6xl',
          onMouseMove: (e) => {
            if (!r.current) return
            let t = r.current.clientWidth,
              n = r.current.clientHeight
            i({
              x: (e.nativeEvent.offsetX / t) * 100,
              y: (e.nativeEvent.offsetY / n) * 100,
            })
          },
          onMouseOut: () => {
            i(s)
          },
          ref: r,
          children: [
            (0, l.jsx)('div', {
              className: 'text-secondary',
              children: (0, l.jsx)('h1', { children: t }),
            }),
            (0, l.jsx)('div', {
              className: 'absolute top-0 left-0 w-full h-full text-accent',
              style: u,
              children: (0, l.jsx)('h1', { children: t }),
            }),
          ],
        })
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t))
    e.O(0, [441, 684, 358], () => t(3347)), (_N_E = e.O())
  },
])
