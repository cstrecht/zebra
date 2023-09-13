import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

export const WelcomeEmail = ({ name }) => (
  <Html>
    <Head />
    <Preview>Informations are here ✨</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading>Hello {name}!</Heading>
        <Text style={{ ...text, marginBottom: "14px" }}>
          Did I draw your attention? Just to clarify, I&apos;m not here to sell
          you anything, though. 😄
        </Text>
        <Link
          href="https://www.allthingstypewriter.com/typewriter-brands/adler-typewriters/"
          target="_blank"
          style={{
            ...link,
            display: "block",
            marginBottom: "38px",
          }}
        >
          Click here to know more about the real Adler Typewriter (1896)
        </Link>
        <Text
          style={{
            ...text,
            color: "#ababab",
            marginTop: "12px",
            marginBottom: "38px",
          }}
        >
          Thanks for checking out this project—it means a lot. Have a fantastic
          day! ☕️
        </Text>

        <Text style={footer}>
          made with 💜 by &nbsp;
          <Link
            href="https://cstrecht.com"
            target="_blank"
            style={{ ...link, color: "#898989" }}
          >
            carolina strecht
          </Link>
          <br />
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const link = {
  color: "#a854f7",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};
