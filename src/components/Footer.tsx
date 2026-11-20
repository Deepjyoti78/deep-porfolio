import { Row, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" vertical="center" s={{ direction: "column" }}>
      <Row
        className={styles.mobile}
        maxWidth="m"
        fillWidth
        paddingY="12"
        paddingX="24"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
          gap: "12",
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text> {person.name}
        </Text>
        <Row gap="16" vertical="center" horizontal="center">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Row>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
