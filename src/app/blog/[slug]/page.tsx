import { notFound } from "next/navigation";
import { CustomMDX, ScrollToHash } from "@/components";
import {
  Meta,
  Schema,
  Column,
  Heading,
  HeadingNav,
  Icon,
  Row,
  Text,
  SmartLink,
  Avatar,
  Media,
  Line,
} from "@once-ui-system/core";
import { baseURL, about, blog, person } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { getPosts } from "@/utils/utils";
import { Metadata } from "next";
import React from "react";
import { Posts } from "@/components/blog/Posts";
import { ShareSection } from "@/components/blog/ShareSection";

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

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "blog", "posts"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "blog", "posts"]);
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${blog.path}/${post.slug}`,
  });
}

export default async function Blog({ params }: { params: Promise<{ slug: string | string[] }> }) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  let post = getPosts(["src", "app", "blog", "posts"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Column
      maxWidth="m"
      paddingBottom="12"
      horizontal="center"
      style={{}}
    >
      <Schema
            as="blogPosting"
            baseURL={baseURL}
            path={`${blog.path}/${post.slug}`}
            title={post.metadata.title}
            description={post.metadata.summary}
            datePublished={post.metadata.publishedAt}
            dateModified={post.metadata.publishedAt}
            image={
              post.metadata.image ||
              `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
            }
            author={{
              name: person.name,
              url: `${baseURL}${about.path}`,
              image: `${baseURL}${person.avatar}`,
            }}
          />
          
          <GridSection isFirst style={{ paddingTop: "24px", paddingBottom: "48px" }}>
            <Row fillWidth paddingX="s" horizontal="center">
              <Column fillWidth gap="l">
                <Column 
                  fillWidth 
                  background="surface" 
            paddingX="32"
            paddingTop="24"
            paddingBottom="48"
            radius="l" 
            border="neutral-medium" 
            gap="32"
            className="premium-shadow blog-hero-mobile-padding"
            position="relative"
          >

            {/* Top Row: Back Button + Author & Share */}
            <Row fillWidth horizontal="between" vertical="center" style={{ zIndex: 1, flexWrap: "nowrap" }} gap="16">
              <SmartLink href="/blog" style={{ textDecoration: 'none', flexShrink: 0 }}>
                <Row vertical="center" gap="8" className="hover-badge" style={{
                  padding: "6px 12px",
                  borderRadius: "9999px",
                  border: "1px solid var(--neutral-alpha-weak)",
                  backgroundColor: "var(--neutral-alpha-weak)",
                }}>
                  <Text variant="label-default-s" onBackground="neutral-weak">←</Text>
                  <Text variant="label-default-s" onBackground="neutral-strong">Back<span className="hide-on-mobile"> to all posts</span></Text>
                </Row>
              </SmartLink>

              <Row gap="8" vertical="center" style={{ marginLeft: "auto", flexWrap: "nowrap", overflowX: "auto" }}>
                <ShareSection title={post.metadata.title} url={`${baseURL}${blog.path}/${post.slug}`} compact />
              </Row>
            </Row>

            {/* Article Titles */}
            <Column gap="24" style={{ zIndex: 1 }}>
              <Row gap="16" vertical="center" wrap className="blog-metadata">
                {post.metadata.tag && (
                  <Row vertical="center" gap="8" className="hide-on-mobile">
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--brand-solid-strong)" }} />
                    <Text variant="label-default-s" onBackground="neutral-strong">{post.metadata.tag}</Text>
                  </Row>
                )}
                {post.metadata.publishedAt && (
                  <>
                    <Text variant="body-default-xs" onBackground="neutral-weak" className="hide-on-mobile">•</Text>
                    <Row vertical="center" className="mobile-date-button">
                      <Text variant="body-default-s" onBackground="neutral-strong" className="mobile-date-text">
                        {formatDate(post.metadata.publishedAt)}
                      </Text>
                    </Row>
                  </>
                )}
                <Text variant="body-default-xs" onBackground="neutral-weak" className="hide-on-mobile">•</Text>
                <Text variant="body-default-s" onBackground="neutral-strong" className="hide-on-mobile">
                  {Math.max(1, Math.ceil(post.content.split(/\s+/).length / 200))} min read
                </Text>
              </Row>

              <Heading as="h1" variant="display-strong-m" style={{ letterSpacing: "-0.04em", lineHeight: "1.1" }}>
                {post.metadata.title}
              </Heading>

              {post.metadata.summary && (
                <Text variant="body-default-m" onBackground="neutral-weak" className="blog-post-summary">
                  {post.metadata.summary}
                </Text>
              )}
            </Column>




          </Column>

                <Column as="article" maxWidth="m" fillWidth marginTop="32" paddingX="s">
                  <CustomMDX source={post.content} />
                </Column>
              </Column>
            </Row>
          </GridSection>

          <GridSection hideBottomBorder style={{ paddingTop: "40px" }}>
            <Row fillWidth paddingX="s" horizontal="center">
              <Column fillWidth gap="40" horizontal="center">
                <Line maxWidth="40" />
                <Text as="h2" id="recent-posts" variant="heading-strong-xl" marginBottom="24">
                  Recent posts
                </Text>
                <Posts exclude={[post.slug]} range={[1, 2]} columns="2" thumbnail direction="column" />
              </Column>
            </Row>
          </GridSection>
          <ScrollToHash />
    </Column>
  );
}
