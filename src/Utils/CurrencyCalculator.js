function cryptoToCurrency() {
    const e = document.querySelector("#from-multy"), t = document.querySelector("#to-multy"),
        n = document.querySelector("#swap-multy"), o = document.querySelector("#amount-multy"),
        a = document.querySelector("#result-multy"), c = document.querySelector(".select-parent-1"),
        r = document.querySelector(".select-parent-2");

    function s() {
        const n = parseFloat(o.value), c = e.value, r = t.value;
        !c || !r || isNaN(n) || n <= 0 ? a.value = "" : fetch(`https://min-api.cryptocompare.com/data/price?fsym=${c}&tsyms=${r}`).then((e => e.json())).then((e => {
            const t = e[r], o = n * t;
            a.value = o.toFixed(5)
        }))
    }

    function l() {
        const n = parseFloat(o.value), c = e.value, r = t.value;
        !c || !r || isNaN(n) || n <= 0 ? a.value = "" : fetch(`https://min-api.cryptocompare.com/data/price?fsym=${r}&tsyms=${c}`).then((e => e.json())).then((e => {
            const t = e[c], o = n * t;
            a.value = o.toFixed(5)
        }))
    }

    fetch("https://min-api.cryptocompare.com/data/all/coinlist").then((e => e.json())).then((t => {
        Object.keys(t.Data).filter((e => t.Data[e].IsTrading)).forEach((t => {
            const n = document.createElement("option");
            n.value = t, n.textContent = t, n.setAttribute("class", "bg-opt"), e.appendChild(n.cloneNode(!0))
        }))
    })), fetch("https://api.exchangerate-api.com/v4/latest/USD").then((e => e.json())).then((e => {
        Object.keys(e.rates).forEach((e => {
            const n = document.createElement("option");
            n.value = e, n.textContent = e, n.setAttribute("class", "bg-opt"), t.appendChild(n.cloneNode(!0))
        }))
    }));
    let u = !0;
    n.addEventListener("click", (() => {
        !1 !== u ? (l(), o.addEventListener("change", l), e.addEventListener("change", l), t.addEventListener("change", l), c.appendChild(t), r.appendChild(e), u = !1) : (s(), o.addEventListener("change", s), e.addEventListener("change", s), t.addEventListener("change", s), c.appendChild(e), r.appendChild(t), u = !0)
    })), o.addEventListener("change", s), e.addEventListener("change", s), t.addEventListener("change", s)
}

function currencyCal() {
    const e = "070c90e1376e1929d0257ac9", t = document.getElementById("fromCurrency"),
        n = document.getElementById("toCurrency"), o = document.getElementById("amountCurrency"),
        a = document.getElementById("result"), c = document.getElementById("swapButton");

    async function r() {
        const c = t.value.toUpperCase(), r = n.value.toUpperCase(), s = parseFloat(o.value);
        if (c && r && s > 0) try {
            const t = await async function (t, n) {
                const o = await fetch(`https://v6.exchangerate-api.com/v6/${e}/pair/${t}/${n}`);
                if (!o.ok) throw new Error("Не удалось получить данные с API.");
                const a = await o.json();
                if ("error" === a.result) throw new Error(a["error-type"]);
                return a.conversion_rate
            }(c, r), n = (s * t).toFixed(2);
            a.value = n
        } catch (e) {
            a.textContent = "Ошибка: " + e.message
        } else a.textContent = "0"
    }

    (async function () {
        const a = await fetch(`https://v6.exchangerate-api.com/v6/${e}/codes`), c = await a.json();
        if ("success" !== c.result) throw new Error(c["error-type"]);
        const s = c.supported_codes;
        for (let e = 0; e < s.length; e++) {
            const o = document.createElement("option");
            o.value = s[e][0], o.textContent = `${s[e][0]}, ${s[e][1]}`, o.setAttribute("class", "bg-opt"), t.appendChild(o);
            const a = o.cloneNode(!0);
            a.value = s[e][0], n.appendChild(a)
        }
        [t, n, o].forEach((e => {
            e.addEventListener("input", r)
        })), r()
    })().catch((e => {
        a.textContent = "Ошибка: " + e.message
    })), c.addEventListener("click", (() => {
        const e = t.value;
        t.value = n.value, n.value = e, r()
    }))
}

function cryptoCal() {
    const e = document.querySelector("#from-crypto"), t = document.querySelector("#to-crypto"),
        n = document.querySelector("#amount-crypto"), o = document.querySelector("#result-crypto"),
        a = document.querySelector("#swap-crypto");

    function c() {
        const a = parseFloat(n.value), c = e.value, r = t.value;
        !c || !r || isNaN(a) || a <= 0 || fetch(`https://min-api.cryptocompare.com/data/price?fsym=${c}&tsyms=${r}`).then((e => e.json())).then((e => {
            const t = e[r], n = a * t;
            o.value = n.toFixed(2)
        }))
    }

    fetch("https://min-api.cryptocompare.com/data/all/coinlist").then((e => e.json())).then((n => {
        Object.keys(n.Data).filter((e => n.Data[e].IsTrading)).forEach((n => {
            const o = document.createElement("option");
            o.value = n, o.textContent = n, o.setAttribute("class", "bg-opt"), e.appendChild(o.cloneNode(!0)), t.appendChild(o.cloneNode(!0))
        }))
    })), a.addEventListener("click", (() => {
        const n = e.value;
        e.value = t.value, t.value = n, c()
    })), e.addEventListener("change", c), t.addEventListener("change", c), n.addEventListener("input", c)
}

export {currencyCal, cryptoCal, cryptoToCurrency}
