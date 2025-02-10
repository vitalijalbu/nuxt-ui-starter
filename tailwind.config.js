module.exports = {
    content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
                colors: {
                  primary: "#FD4F00",
                },
        },
    },
    plugins: [
    ],
    safelist: [
        {
            pattern:
                /(bg|text|border)-(primary|info|error|warning|success|neutral|secondary|white)/
        }
    ]
}
