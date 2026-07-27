"use client";

import { Card, Column, Media, Row, Avatar, Text } from "@once-ui-system/core";
import { formatDate } from "@/utils/formatDate";
import { person } from "@/resources";

interface PostProps {
  post: any;
  thumbnail: boolean;
  direction?: "row" | "column";
}

export default function Post({ post, thumbnail, direction }: PostProps) {
  return (
    <Card
      fillWidth
      key={post.slug}
      href={`/blog/${post.slug}`}
      transition="micro-medium"
      direction={direction}
      padding="24"
      radius="l"
      className="premium-shadow blog-card-mobile"
      gap={direction === "column" ? "16" : "24"}
      s={{ direction: "column", padding: "8" }}
      background="surface"
      border="neutral-medium"
    >
      {post.metadata.image && thumbnail && (
        <Media
          priority
          sizes="(max-width: 768px) 100vw, 640px"
          border="neutral-alpha-weak"
          cursor="interactive"
          radius="l"
          src={post.metadata.image}
          alt={"Thumbnail of " + post.metadata.title}
          aspectRatio="16 / 9"
        />
      )}
      <Row fillWidth>
        <Column fillWidth paddingY="16" paddingX="16" gap="16" vertical="center" align="start" s={{ paddingX: "0", paddingY: "0", gap: "4" }}>
          <Row gap="8" vertical="center" className="mobile-meta-row">
            <Avatar src={person.avatar} size="xs" className="mobile-blog-avatar" />
            <Column gap="2">
              <Text variant="label-default-xs" className="mobile-blog-author">{person.name}</Text>
              <Text variant="body-default-xs" onBackground="neutral-weak" className="mobile-blog-date">
                {post.metadata.publishedAt ? formatDate(post.metadata.publishedAt, false) : ""}
              </Text>
            </Column>
          </Row>
          <Text variant="heading-strong-s" wrap="balance" className="mobile-blog-title">
            {post.metadata.title}
          </Text>
          {post.metadata.summary && (
            <Text variant="body-default-s" onBackground="neutral-weak" className="line-clamp-2 mobile-blog-summary">
              {post.metadata.summary}
            </Text>
          )}
          {post.metadata.tag && (
            <Text variant="label-strong-xs" onBackground="neutral-weak" className="hide-on-mobile">
              {post.metadata.tag}
            </Text>
          )}
        </Column>
      </Row>
    </Card>
  );
}
