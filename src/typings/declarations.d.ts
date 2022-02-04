declare module '*.scss' {
	const styles: { [className: string]: string };
	export = styles;
}

declare module '*.svg' {
	const content: any;
	export default content;
}
