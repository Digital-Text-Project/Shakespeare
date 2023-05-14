<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:tei="http://www.tei-c.org/ns/1.0">
    
    <xsl:output method="html" indent="yes"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>Romeo and Juliet</title>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&amp;display=swap');
                    body {
                        margin: 100px;
                        background-color: #FFFEFB;
                        font-family: "Playfair Display", serif;
                    }
                    h1 {
                        text-align: center;
                      }

                    table {
                        width: 75%;
                    }
                </style>
            </head>
            <body>
                <h1>Romeo and Juliet as a kids' play</h1>
                <table border="1">
                    <tr>
                        <td style="background-color: #35384E; color: white;">File Title</td>
                        <td> 
                            <xsl:value-of select="//tei:titleStmt/tei:title"/>
                        </td>
                    </tr>

                    <tr>
                        <td style="background-color: #35384E; color: white;">Based on</td>
                        <td>
                            <xsl:value-of select="//tei:titleStmt/tei:respStmt[1]/tei:name"/>
                        </td>
                    </tr>

                    <tr>
                        <td style="background-color: #35384E; color: white;">Edited by</td>
                        <td>
                            <xsl:value-of select="//tei:titleStmt/tei:respStmt[2]/tei:name"/>
                        </td>
                    </tr>

                    <tr>
                        <td style="background-color: #35384E; color: white;">Publication</td>
                        <td>
                            <xsl:value-of select="//tei:publicationStmt/tei:p"/>
                        </td>
                    </tr>

                    <tr>
                     <td style="background-color: #35384E; color: white;">Source Description</td>
                        <td>
                            <xsl:value-of select="//tei:sourceDesc/tei:p"/>
                        </td>
                    </tr>

                    <tr>
                        <td style="background-color: #35384E; color: white;">Project Description</td>
                        <td>
                            <xsl:value-of select="//tei:encodingDesc/tei:projectDesc/tei:p"/>
                        </td>
                    </tr>

                    <tr>
                        <td style="background-color: #35384E; color: white;">Schema Specification</td>
                        <td>
                            <xsl:value-of select="//tei:encodingDesc/tei:schemaSpec/@ident"/>
                        </td>
                    </tr>

                    <tr>
                        <td style="background-color: #35384E; color: white;">Tags Declaration</td>
                        <td>
                            <xsl:value-of select="//tei:encodingDesc/tei:tagsDecl/tei:namespace/tei:tagUsage"/>
                        </td>
                    </tr>
                    
                    <tr>
                        <td style="background-color: #35384E; color: white;">Language</td>
                        <td>
                            <xsl:value-of select="//tei:langUsage/tei:language"/>
                        </td>
                    </tr>

                    <tr>
                        <td style="background-color: #35384E; color: white;">Play Channel</td>
                        <td>
                            <xsl:value-of select="//tei:textDesc[@n='play']/tei:channel"/>
                        </td>
                    </tr>

                    <tr>
                       <td style="background-color: #35384E; color: white;">Setting Description</td>
                        <td>
                            <xsl:value-of select="//tei:settingDesc/tei:p"/>
                        </td>
                    </tr>
            
            
                </table>
            
            </body>
            <head>
                <style>
                  table {
                    border-collapse: collapse;
                    width: 100%;
                  }
                  th, td {
                    border: 1px solid black;
                    padding: 8px;
                    text-align: left;
                  }
                  th {
                    background-color: #35384E;
                    color: white;
                  }
                  h2 {
                    text-align: center;
                  }
                 
                </style>
              </head>
             <body>
    <h2>Characters</h2>
    <table>
        <tr>
            <th>Role</th>
            <th>Description</th>
        </tr>
        <xsl:for-each select="//tei:castItem">
            <xsl:variable name="family" select="substring(tei:roleDesc, 1, 8)"/>
            <xsl:choose>
                <xsl:when test="$family = 'Montague'">
                    <tr style="background-color: #D8EAF3; color: white;">
                        <td style="background-color: red; color: white;"><xsl:value-of select="tei:role"/></td>
                        <td><xsl:value-of select="tei:roleDesc"/></td>
                    </tr>
                </xsl:when>
                <xsl:when test="$family = 'Capulet'">
                    <tr style="background-color: blue; color: white;">
                        <td style="background-color: blue; color: white;"><xsl:value-of select="tei:role"/></td>
                        <td><xsl:value-of select="tei:roleDesc"/></td>
                    </tr>
                </xsl:when>
                <xsl:otherwise>
                    <tr>
                        <td><xsl:value-of select="tei:role"/></td>
                        <td><xsl:value-of select="tei:roleDesc"/></td>
                    </tr>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:for-each>
    </table>
        
                <h2>SCENES</h2>
                <table>
                  <tr>
                    <th>Scene</th>
                    <th>Content</th>
                  </tr>
                  <xsl:for-each select="//tei:div[@type='scene']">
                    <tr>
                      <td><xsl:value-of select="tei:head"/></td>
                      <td>
                        <xsl:for-each select="tei:stage | tei:sp">
                          <xsl:choose>
                            <xsl:when test="self::tei:stage">
                              <p><strong><xsl:value-of select="."/></strong></p>
                            </xsl:when>
                            <xsl:when test="self::tei:sp">
                              <p><strong><xsl:value-of select="tei:speaker"/></strong>: <xsl:value-of select="tei:p"/></p>
                            </xsl:when>
                          </xsl:choose>
                        </xsl:for-each>
                      </td>
                    </tr>
                  </xsl:for-each>
                </table>
              </body>
           
           
               
            
        </html>
    </xsl:template>

</xsl:stylesheet>
