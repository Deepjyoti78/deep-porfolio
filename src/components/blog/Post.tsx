"use client";

import { Card, Column, Media, Row, Text } from "@once-ui-system/core";
import { formatDate } from "@/utils/formatDate";

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
      padding="12"
      radius="m"
      className="premium-shadow blog-card-mobile"
      gap={direction === "column" ? "8" : "12"}
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
          radius="m"
          src={post.metadata.image}
          alt={"Thumbnail of " + post.metadata.title}
          aspectRatio="16 / 9"
        />
      )}
      <Column fillWidth paddingY="4" paddingX="4" gap="8" align="start" style={{ flex: 1 }} s={{ paddingX: "0", paddingY: "0", gap: "4" }}>
        <Text variant="heading-strong-s" wrap="balance" className="mobile-blog-title">
          {post.metadata.title}
        </Text>
        {post.metadata.summary && (
          <Text variant="body-default-s" onBackground="neutral-weak" className="line-clamp-2 mobile-blog-summary" style={{ marginTop: '4px' }}>
            {post.metadata.summary}
          </Text>
        )}
        {post.metadata.tag && (
          <Text variant="label-strong-xs" onBackground="neutral-weak" className="hide-on-mobile">
            {post.metadata.tag}
          </Text>
        )}
        {/* Date + time pinned to bottom-right */}
        <Row fillWidth horizontal="end" style={{ marginTop: 'auto', paddingTop: '3px' }}>
          <Text variant="body-default-xs" onBackground="neutral-weak" className="mobile-blog-date blog-date-text">
            {post.metadata.publishedAt ? formatDate(post.metadata.publishedAt, false) : ""}
          </Text>
        </Row>
      </Column>
    </Card>
  );
}

