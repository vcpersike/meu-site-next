import { Typography, Button } from "@material-tailwind/react";

const LINKS = [{
  link: "Início",
},
{
  link: "LinkedIn",
  href: "https://www.linkedin.com/in/victor-persike-78515b71/",
},
{
  link: "Github",
  href: "https://github.com/vcpersike?tab=repositories",
},];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Made with{" "}
            <a href="https://www.material-tailwind.com" target="_blank">
              Material Tailwind
            </a>{" "}
            by{" "}
            <a href="https://www.creative-tim.com" target="_blank">
              Creative Tim
            </a>
            .
          </Typography>
          <ul className="flex gap-8 items-center">
            {LINKS.map(({ link, href }) => (
              <li key={link}>
                <Typography
                  as="a"
                  href={href || "#"}
                  target={href ? "_blank" : "_self"}
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
