import { NavLink } from "react-router-dom";

export default function Buttons({
	text,
	href,
	type,
	id,
	name,
	value,
	placeholder,
	...restProps
}) {
	return (
		<>
			{!href ? (
				<>
					{type ? (
						<input
							type={type}
							id={id}
							name={name}
							value={value}
							placeholder={placeholder}
						/>
					) : (
						<button {...restProps}>{text}</button>
					)}
				</>
			) : (
				<>
					<NavLink className="link" to={href} {...restProps}>
						{text}
					</NavLink>
				</>
			)}
		</>
	);
}
