"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick, searchText }) => {
  const filteredData = searchText
    ? data.filter(
        (post) =>
          post.tag.toLowerCase().includes(searchText.toLowerCase()) ||
          post.creator.email.toLowerCase().includes(searchText.toLowerCase()) ||
          post.prompt.toLowerCase().includes(searchText.toLowerCase())
      )
    : data;

  return (
    <div className="mt-16 prompt_layout">
      {filteredData.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const respose = await fetch("/api/prompt");
      const data = await respose.json();

      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handleTagClick = (e) => {
    setSearchText(e);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
        {searchText && (
          <div
            className="absolute right-4 cursor-pointer"
            onClick={() => setSearchText("")}
          >
            <i class="ri-close-line"></i>
          </div>
        )}
      </form>

      <PromptCardList
        data={posts}
        handleTagClick={(e) => handleTagClick(e)}
        searchText={searchText}
      />
    </section>
  );
};

export default Feed;
