import React from 'react'

function randInt(min, max) {
    let x = (max - min) + 1
    return min + Math.floor(Math.random() * x)
}
export default function Banner() {
    const r = randInt(1, 3)
}