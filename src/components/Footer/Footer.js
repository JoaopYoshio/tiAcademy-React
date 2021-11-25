import { Breadcrumb, BreadcrumbItem, Container } from "reactstrap"

export const Footer = () => {
    return (
        <footer className="position-fixed bottom-0 bg-info p-3 w-100">
            <Container className="m-auto" dark expand="md">
                <div className="d-flex">
                    <Breadcrumb className="m-auto">
                        <BreadcrumbItem active>
                            Rede Sociais
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            <a href="https://www.linkedin.com/in/joãotokusumivieira/" className="text-decoration-none">
                                Linkedin
                            </a>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            <a href="https://www.instagram.com/jaopvieira_/" className="text-decoration-none">
                                Instagram
                            </a>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            <a href="https://github.com/iPvieira" className="text-decoration-none">
                                Github
                            </a>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </Container>

        </footer>
    )
}
