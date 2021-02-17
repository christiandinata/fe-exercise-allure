import Nav from "./Nav";

// A simple layout to wrap whole components

const Layout = (props) => {
	return (
		<>
            <Nav />
			<div>{props.children}</div>
		</>
	);
};

export default Layout;
