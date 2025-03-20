Jekyll::Hooks.register :site, :post_write do |site|
  tag_dir = site.config["destination"] + "/tags"
  FileUtils.mkdir_p(tag_dir)

  site.tags.each do |tag, posts|
    tag_slug = tag.gsub(" ", "-").downcase
    tag_page_path = File.join(tag_dir, "#{tag_slug}.html")

    File.open(tag_page_path, "w") do |file|
      file.puts("---")
      file.puts("layout: tag")
      file.puts("title: \"#{tag}\"")
      file.puts("tag: \"#{tag}\"")
      file.puts("permalink: /tags/#{tag_slug}/")
      file.puts("---")
    end
  end
end
