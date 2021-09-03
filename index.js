const baseUrl = "https://api-seo.cloudhost.cm";

  const apifetch = `${baseUrl}/api/seo/get-project`;

  const apiCall = async (data) => {
    let req = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    };

    try {
      let get_project = await fetch(apifetch, req);
      jsonData = await get_project.json();
      
    } catch (error) {
      alert(req.message);
    }

    const test = document.querySelector('body')
    const scr = document.querySelector('script')
    
    const attr = scr.getAttribute('src')
    
    console.log(attr.includes(data.app_key))
    if (attr.includes(data.app_key) === true) {
      const desc = document.createElement('meta');
      const keywords = document.createElement('meta');
      const title = document.createElement('title');
      const head = document.querySelector('head');
      title.innerText = jsonData.project.meta_title;
      keywords.setAttribute('name', 'keywords')
      keywords.setAttribute('content', jsonData.project.meta_keywords)
      desc.setAttribute('name', 'description')
      desc.setAttribute('content', jsonData.project.meta_description)
      head.appendChild(desc)
      head.appendChild(keywords)
      head.appendChild(title)
    }

    else {
      alert('Verify key again')
    }
  }
  apiCall({
    app_key: 'SEO-Crypt237njRDYalYFeRFm7UBTNAp',
    domain: 'funny'
  });

