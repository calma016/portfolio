import { Tab } from "@headlessui/react"

const Navbar = () => {
    return(
        <>
        <Tab.Group>
            <Tab.List>
                <Tab>Tab 1</Tab>
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>Content 1</Tab.Panel>
            </Tab.Panels>
        </Tab.Group>

        </>
    )
}
export default Navbar;