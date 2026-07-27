import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, newsletter } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

const PlusIcon = ({ style }: { style?: React.CSSProperties }) => (
  <div style={{ position: "absolute", width: "15px", height: "15px", zIndex: 10, ...style }}>
    <div style={{ position: "absolute", left: "7px", top: "1px", bottom: "1px", width: "1px", borderLeft: "1px solid var(--neutral-border-medium)", borderRadius: "1px" }} />
    <div style={{ position: "absolute", top: "7px", left: "1px", right: "1px", height: "1px", borderTop: "1px solid var(--neutral-border-medium)", borderRadius: "1px" }} />
  </div>
);

const GridSection = ({ children, hideBottomBorder = false, isFirst = false, style, ...rest }: any) => (
  <Column fillWidth position="relative" style={style} {...rest}>
    <div style={{ position: "absolute", left: "-1px", top: isFirst ? "-120px" : "10px", bottom: hideBottomBorder ? 0 : "10px", width: "1px", borderLeft: "1px solid var(--neutral-border-medium)", zIndex: 0, pointerEvents: "none" }} />
    <div style={{ position: "absolute", right: "-1px", top: isFirst ? "-120px" : "10px", bottom: hideBottomBorder ? 0 : "10px", width: "1px", borderRight: "1px solid var(--neutral-border-medium)", zIndex: 0, pointerEvents: "none" }} />
    {children}
    {!hideBottomBorder && (
      <>
        <div style={{ position: "absolute", bottom: 0, left: "10px", right: "10px", height: "1px", borderBottom: "1px solid var(--neutral-border-medium)", zIndex: 0, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, right: "calc(100% + 10px)", width: "calc(50vw - 50%)", height: "1px", borderBottom: "1px solid var(--neutral-border-medium)", zIndex: 0, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: "calc(100% + 10px)", width: "calc(50vw - 50%)", height: "1px", borderBottom: "1px solid var(--neutral-border-medium)", zIndex: 0, pointerEvents: "none" }} />
        <PlusIcon style={{ bottom: "-7px", left: "-8px" }} />
        <PlusIcon style={{ bottom: "-7px", right: "-8px" }} />
      </>
    )}
  </Column>
);

export default function Blog() {
  return (
    <Column maxWidth="m" fillWidth horizontal="center">
      <GridSection isFirst hideBottomBorder paddingTop="24" paddingX="s" flex={1}>
        <Schema
          as="blogPosting"
          baseURL={baseURL}
          title={blog.title}
          description={blog.description}
          path={blog.path}
          image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
          author={{
            name: person.name,
            url: `${baseURL}/blog`,
            image: `${baseURL}${person.avatar}`,
          }}
        />
        <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
          {blog.title}
        </Heading>
        <Column fillWidth flex={1} gap="40">
          <Posts columns="3" />
        </Column>
      </GridSection>
    </Column>
  );
}
