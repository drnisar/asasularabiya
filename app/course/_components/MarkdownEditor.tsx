"use client";

import dynamic from "next/dynamic";
import "@mdxeditor/editor/style.css";

import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  CreateLink,
  BlockTypeSelect,
} from "@mdxeditor/editor";

const MDXEditor = dynamic(
  () => import("@mdxeditor/editor").then((mod) => mod.MDXEditor),
  {
    ssr: false,
  },
);

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const MarkdownEditor = ({
  value,
  onChange,
  placeholder,
}: MarkdownEditorProps) => {
  return (
    <MDXEditor
      markdown={value}
      onChange={onChange}
      placeholder={placeholder}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),

        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <BlockTypeSelect />
              <CreateLink />
            </>
          ),
        }),
      ]}
      contentEditableClassName="markdown-editor-content"
    />
  );
};

export default MarkdownEditor;
