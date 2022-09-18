import adapter from "@sveltejs/adapter-static"; 

/** @type {import(""@sveltejs/kit").Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
        paths: {
            // change below to your repo name
            base: "/ullis-cool",
        }
    }
};

export default config;
