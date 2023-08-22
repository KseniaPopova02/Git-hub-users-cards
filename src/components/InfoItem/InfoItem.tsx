import React, { useMemo } from "react";
import classNames from "classnames";
import styles from "./InfoItem.module.scss";

export interface InfoItemProps {
  icon: React.ReactNode;
  text?: string | null;
  isLink?: boolean;
}

export const InfoItem = ({ icon, text, isLink }: InfoItemProps) => {
  const currentText = text || "Not available";

  const currentHref = useMemo(() => {
    if (isLink) {
      return text && text.startsWith("http") ? text : `https://${text}`;
    }
    return "";
  }, [isLink, text]);

  const itemClasses = classNames(styles.infoItem, {
    [styles.empty]: !text,
  });

  return (
    <div className={itemClasses}>
      {icon}
      <div>
        {isLink && text ? (
          <a
            href={currentHref}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  );
};
