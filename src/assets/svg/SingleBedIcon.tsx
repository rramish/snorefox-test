import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const SingleBedIcon = (props: SvgProps) => (
    <Svg
        width={19}
        height={36}
        fill="none"
        {...props}
    >
        <G clipPath="url(#a)">
            <Path
                fill="#FF6A42"
                d="M19 18.014v13.862c0 2.186-1.422 3.595-3.555 3.595H3.555C1.422 35.471 0 34.033 0 31.876V4.01C0 1.967 1.45.5 3.498.5h12.003C17.578.5 19 1.995 19 4.066v13.948Zm-1.08 6.615c0-2.445-.03-4.89 0-7.362 0-.547-.172-.978-.598-1.266-.37-.259-.825-.517-1.252-.661-.426-.144-.881-.144-1.308-.173-3.698-.259-7.395-.316-11.064.029-.825.086-1.593.345-2.19.978-.256.287-.399.604-.399 1.006v14.725c0 1.496.967 2.445 2.446 2.445h11.918c1.536 0 2.475-.95 2.475-2.474-.029-2.387-.029-4.831-.029-7.247ZM1.08 12.032c.74-.604 1.537-.862 2.39-.949l2.076-.172a77.142 77.142 0 0 1 8.931.086c.825.058 1.65.058 2.418.403.341.144.654.345 1.024.546V4.037c0-1.466-.967-2.444-2.418-2.444H3.527c-1.48 0-2.446.978-2.446 2.473V12.033Zm.03 3.02c.625-.23 1.222-.575 1.877-.69.767-.173 1.592-.201 2.36-.23 3.072-.173 6.144-.115 9.216.057 1.166.087 2.304.173 3.27.95 0 0 .03 0 .086-.03 0-.287-.028-.603 0-.89.085-.72-.256-1.209-.796-1.554-.455-.259-.939-.489-1.45-.546-3.073-.317-6.145-.374-9.216-.23-1.053.028-2.134.057-3.158.259-2.02.373-2.417 1.207-2.19 2.904Z"
            />
            <Path
                fill="#fff"
                d="M17.918 24.63v7.276c0 1.553-.938 2.473-2.474 2.473H3.526c-1.479 0-2.446-.978-2.446-2.444V17.21c0-.403.142-.748.398-1.007.598-.633 1.366-.891 2.19-.978 3.698-.345 7.396-.287 11.065-.028.455.028.91.028 1.308.172.455.144.882.374 1.252.662.426.287.597.719.597 1.265 0 2.416.028 4.89.028 7.334ZM1.08 12.033V4.067c0-1.495.967-2.473 2.446-2.473h11.975c1.45 0 2.417.978 2.417 2.444V11.947c-.37-.201-.682-.403-1.024-.546-.767-.345-1.592-.345-2.417-.403a77.121 77.121 0 0 0-8.931-.086c-.683.028-1.394.086-2.077.172-.853.087-1.621.374-2.389.95Zm8.448-9.318c-1.138.03-2.247.058-3.357.115-1.251.087-2.19 1.036-2.247 2.301-.028.69-.028 1.352 0 2.042.057 1.496.967 2.387 2.418 2.473.569.03 1.11.058 1.678.058 1.65-.029 3.3 0 4.95-.086 1.194-.058 2.076-1.065 2.132-2.244.029-.776.029-1.553 0-2.3-.056-1.18-.995-2.157-2.161-2.215-1.166-.086-2.304-.115-3.413-.144Z"
            />
            <Path
                fill="#fff"
                d="M1.11 15.051c-.228-1.697.17-2.53 2.19-2.934 1.024-.2 2.105-.2 3.157-.258 3.072-.115 6.144-.087 9.216.23.512.057.995.287 1.45.546.57.316.882.834.797 1.553-.029.288 0 .604 0 .892-.029.028-.057.028-.086.028-.967-.747-2.104-.862-3.27-.949a75.807 75.807 0 0 0-9.216-.057c-.797.057-1.593.086-2.36.23-.655.144-1.252.489-1.878.719Z"
            />
            <Path
                fill="#FF6A42"
                d="M9.528 2.715c1.11.029 2.247.057 3.385.144 1.166.057 2.133 1.035 2.162 2.214.028.777.028 1.553 0 2.3-.057 1.209-.94 2.187-2.134 2.244-1.65.086-3.3.086-4.949.086-.569 0-1.11-.028-1.678-.057-1.479-.086-2.36-1.007-2.418-2.473a24.445 24.445 0 0 1 0-2.042c.057-1.266.996-2.215 2.247-2.301 1.138-.058 2.247-.086 3.385-.115Zm-.057.978c-1.08.028-2.161.057-3.27.115-.683.028-1.28.575-1.31 1.265a15.922 15.922 0 0 0 0 2.33c.03.69.598 1.236 1.28 1.265 2.22.029 4.466.029 6.685 0 .683 0 1.251-.633 1.28-1.323.028-.719.028-1.438 0-2.128-.029-.777-.597-1.352-1.365-1.38-1.11-.087-2.162-.116-3.3-.144Z"
            />
            <Path
                fill="#fff"
                d="M9.47 3.691c1.11.03 2.19.058 3.272.115.768.03 1.336.604 1.365 1.38.028.72.028 1.439 0 2.13-.028.718-.597 1.322-1.28 1.322-2.219.029-4.466.029-6.684 0-.654 0-1.252-.575-1.28-1.265a15.92 15.92 0 0 1 0-2.33c.028-.69.626-1.237 1.308-1.265 1.138-.03 2.247-.058 3.3-.087Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 .5h19v35H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export { SingleBedIcon }