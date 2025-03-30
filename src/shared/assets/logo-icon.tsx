import { JSX } from 'react'

export function LogoIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
	return (
		<svg
			id='Layer_1'
			data-name='Layer 1'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			viewBox='0 0 48 48'
			{...props}
		>
			<defs>
				<style>
					{`.cls-1 { fill: url(#linear-gradient); }
            .cls-2 { fill: url(#linear-gradient-2); }
            .cls-3 { fill: url(#linear-gradient-3); }`}
				</style>
				<linearGradient
					id='linear-gradient'
					x1='68.53'
					y1='64.72'
					x2='-13.65'
					y2='-17.47'
					gradientUnits='userSpaceOnUse'
				>
					<stop offset='0' stopColor='#27e9de' />
					<stop offset='0.52' stopColor='#03a4ec' />
					<stop offset='1' stopColor='#2547a8' />
				</linearGradient>
				<linearGradient
					id='linear-gradient-2'
					x1='63.52'
					y1='59.6'
					x2='18.27'
					y2='14.48'
					xlinkHref='#linear-gradient'
				/>
				<linearGradient
					id='linear-gradient-3'
					x1='39.51'
					y1='39.94'
					x2='-42.16'
					y2='-16.56'
					gradientUnits='userSpaceOnUse'
				>
					<stop offset='0' stopColor='#273a9b' />
					<stop offset='0.56' stopColor='#202f65' />
					<stop offset='1' stopColor='#021e2f' />
				</linearGradient>
			</defs>
			<title>feather, quill, pen, write, sign</title>
			<path
				className='cls-1'
				d='M36.12,18.94l3.27,2A40.44,40.44,0,0,0,44.77,3.23a40.26,40.26,0,0,0-23.09,9.08l1.39,2.22-2.29-1.43c-.68.6-1.35,1.21-2,1.86A40.22,40.22,0,0,0,7,41a40.43,40.43,0,0,0,18.24-5.66l-2.23-3.56,4,2.47a40.29,40.29,0,0,0,6-5,40.23,40.23,0,0,0,5.35-6.64Z'
			/>
			<path
				className='cls-2'
				d='M33.05,29.24a40.23,40.23,0,0,0,5.35-6.64l-2.29-3.65,3.27,2A40.44,40.44,0,0,0,44.77,3.23h0L7.05,40.91v0a40.43,40.43,0,0,0,18.24-5.66l-2.23-3.56,4,2.47A40.29,40.29,0,0,0,33.05,29.24Z'
			/>
			<path
				className='cls-3'
				d='M37.75,10.79a1,1,0,0,0,.18-.27l.37-.82-.82.37a1,1,0,0,0-.27.18L4.14,41.45a2.23,2.23,0,0,0-.63,1.05l-.24.91a1.08,1.08,0,0,0,1.32,1.32l.91-.24a2.23,2.23,0,0,0,1.05-.63Z'
			/>
		</svg>
	)
}
